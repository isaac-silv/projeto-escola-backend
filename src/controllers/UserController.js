import User from '../models/User';


const store = async (req, res) => {
  try {
    const novoUser = await User.create(req.body);
    const { id, nome, email } = novoUser;
    return res.json({ id, nome, email });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
}

// Index
const index = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
    return res.json(users);
  } catch (e) {
    return res.json(null);
  }
}

// Show
const show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    const { id, nome, email } = user;
    return res.json({ id, nome, email });
  } catch (e) {
    return res.json(null);
  }
}

// Update
const update = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    const novosDados = await user.update(req.body);
    const { id, nome, email } = novosDados;
    return res.json({ id, nome, email });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
}

// Delete
const exclude = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    await user.destroy();
    return res.json(null);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
}


export const userController = {
  index,
  store,
  show,
  update,
  exclude,
};
