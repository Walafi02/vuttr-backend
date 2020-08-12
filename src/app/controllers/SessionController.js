import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';

import authConfig from '../../config/auth';

import Users from '../schemas/Users';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Error in field validation' });
    }

    const { email, password } = req.body;

    const user = await Users.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({ error: 'User does not exist' });
    }

    if (!(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { _id: id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret),
    });
  }
}

export default new SessionController();
