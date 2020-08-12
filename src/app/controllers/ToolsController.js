import * as Yup from 'yup';

import { Tools } from '../schemas';

class ToolsController {
  async index(req, res) {
    const { id: user_id } = req;
    const { page = 1, limit = 20 } = req.query;

    const tools = await Tools.paginate(
      { user_id },
      { page, limit, select: ['_id', 'title', 'link', 'description', 'tags'] },
    );

    return res.json(tools);
  }

  async store(req, res) {
    const { id: user_id } = req;

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Error in field validation' });
    }

    const { title, link, description, tags = [] } = req.body;
    const { _id: id } = await Tools.create({
      title,
      link,
      description,
      tags,
      user_id,
    });

    return res.json({ id, title, link, description, tags });
  }

  async delete(req, res) {
    const { id } = req.params;

    const tool = await Tools.findById(id);

    if (!tool) {
      return res.status(400).json({ error: 'Tool does not exist' });
    }

    tool.remove();

    return res.json();
  }
}

export default new ToolsController();
