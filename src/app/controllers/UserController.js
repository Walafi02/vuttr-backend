import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

import { Users } from '../schemas';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Error in field validation' });
    }

    const { name, email, password } = req.body;

    const userExist = await Users.findOne({
      email,
    });

    if (userExist) {
      return res.status(400).json({ error: 'E-mail already exists' });
    }

    const { _id: id } = await Users.create({
      name,
      email,
      password_hash: bcrypt.hashSync(password, 8),
    });

    return res.json({ id, name, email });
  }
}

export default new UserController();
