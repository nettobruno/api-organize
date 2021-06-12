import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/User';
import Session from '../models/Session';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    if (!email) return res.send({ error: 'E-mail não informado' });
    if (!password) return res.send({ error: 'Senha não informada' });

    try {
      const userFind = await User.findOne({ email }).select('password');
      if (!userFind) return res.send({ error: 'Usuário incorreto' });

      const checkPassword = await bcrypt.compare(password, userFind.password);
      if (!checkPassword) return res.send({ error: 'Senha incorreta' });

      const jwtKey = '5fcd1be06065d89d3ddb2e828fb3b5d8';
      const payload = { userId: userFind._id };

      const token = jwt.sign(payload, jwtKey);

      const sessionCreated = await Session.create({
        email,
        password,
      });
      if (!sessionCreated)
        return res.send({
          error: 'Erro ao realizar login. Tente novamente mais tarde',
        });

      return res.json({
        message: 'Login realizado com sucesso',
        token,
        id: userFind._id,
      });
    } catch (error) {
      console.log(error);
      return res.send({ store: false });
    }
  }
}

export default new SessionController();
