import Item from '../models/Item';

class ItemController {
  async index(req, res) {
    const { id } = req.params;

    try {
      const itemsFind = await Item.find({ createdById: id });
      return res.send(itemsFind);
    } catch (error) {
      return res.status(500).send({
        message: 'Algum erro interno ocorreu. Tente novamente mais tarde',
        error,
      });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const itemFind = await Item.findById(id).populate('createdById');

      return res.send(itemFind);
    } catch (error) {
      return res.status(500).send({
        message: 'Algum erro interno ocorreu. Tente novamente mais tarde',
      });
    }
  }

  async showAll(req, res) {
    try {
      const itemsFind = await Item.find();
      return res.send(itemsFind);
    } catch (error) {
      return res.status(500).send({
        message: 'Algum erro interno ocorreu. Tente novamente mais tarde',
        error,
      });
    }
  }

  async store(req, res) {
    const { id } = req.params;

    try {
      const { title } = req.body;

      if (!title) {
        return res.send({ error: 'Digite um item' });
      }

      await Item.create({
        createdById: id,
        title,
        active: false,
      });

      return res.send({ store: true, message: 'Item criado com sucesso' });
    } catch (error) {
      return res.status(500).send({
        store: false,
        message: 'Algum erro interno ocorreu. Tente novamente mais tarde',
        error,
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const newItem = req.body;

    if (!id) return res.send({ message: 'Item não existe na base de dados' });

    try {
      const options = { new: true };
      await Item.findByIdAndUpdate(id, newItem, options);

      return res.send({ message: 'Item atualizado com sucesso' });
    } catch (error) {
      return res.status(500).send({
        message: 'Algum erro interno ocorreu. Tente novamente mais tarde',
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) return res.send({ delete: false, id: null });

    try {
      const itemFind = await Item.findByIdAndRemove(id);
      if (!itemFind) return res.send({ message: 'Item não existente' });

      return res.send({ message: 'Item deletado com sucesso' });
    } catch (error) {
      return res
        .status(500)
        .send({ message: 'Não foi possível deletar o item', error });
    }
  }
}

export default new ItemController();
