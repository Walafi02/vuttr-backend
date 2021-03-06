import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import Users from '../schemas/Users';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { id } = await promisify(jwt.verify)(token, authConfig.secret);

    const user = await Users.findById(id);

    if (!user) {
      return res.status(401).json({ error: 'Invalid ID ' });
    }

    req.id = id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid Token' });
  }
};
