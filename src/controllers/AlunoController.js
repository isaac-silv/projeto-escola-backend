import Aluno from '../models/Aluno';
import Foto from '../models/Foto';


const index = async (req, res) => {
  const alunos = await Aluno.findAll({
    attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
    order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
    include: {
      model: Foto,
      attributes: ['url', 'filename'],
    },
  });
  res.json(alunos);
}

const store = async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);

    return res.json(aluno);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
}

const show = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Faltando ID'],
      });
    }

    const aluno = await Aluno.findByPk(id, {
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });

    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno não existe'],
      });
    }

    return res.json(aluno);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
}

const exclude = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Faltando ID'],
      });
    }

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno não existe'],
      });
    }

    await aluno.destroy();
    return res.json({
      apagado: true,
    });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Faltando ID'],
      });
    }

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno não existe'],
      });
    }

    const alunoAtualizado = await aluno.update(req.body);
    return res.json(alunoAtualizado);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
}

export const alunoController = {
  index,
  store,
  show,
  exclude,
  update
}