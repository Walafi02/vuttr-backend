import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

import { User } from '../models';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Error de validação dos campos' });

    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) return res.status(400).json({ error: 'E-mail já cadastrado' });

    await User.create({
      ...req.body,
      password_hash: bcrypt.hashSync(password, 8),
    });

    return res.json();
  }
}

export default new UserController();
