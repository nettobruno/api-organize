import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const usersFind = await User.find();
      return res.send(usersFind);
    } catch (error) {
      return res.status(500).send({ index: false, error });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const userFind = await User.findById(id);
      if (!userFind)
        return res.send({ error: 'Usuário não existe na base de dados' });

      return res.send(userFind);
    } catch (error) {
      return res.status(500).send({ show: false, error });
    }
  }

  async store(req, res) {
    const { name, email, password } = req.body;
    if (!name) return res.send({ error: 'Nome não informado' });
    if (!email) return res.send({ error: 'E-mail não informado' });
    if (!password) return res.send({ error: 'Senha não informada' });

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existente' });
    }

    try {
      await User.create(req.body);

      return res.json({
        message: 'Usuário cadastrado com sucesso. Faça login para começar!',
      });
    } catch (error) {
      return res.status(500).send({ store: false, error });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      const userModified = {
        name,
        email,
      };

      const options = { new: true };
      await User.findByIdAndUpdate(id, userModified, options);

      return res.send({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      return res
        .status(500)
        .send({ message: 'Não foi possível atualizar o usuário' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) return res.send({ delete: false, id: null });

    try {
      const userFind = await User.findByIdAndRemove(id);
      if (!userFind) return res.send({ message: 'Usuário não existente' });

      return res.send({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      return res
        .status(500)
        .send({ message: 'Não foi possível deletar o usuário', error });
    }
  }
}

export default new UserController();
