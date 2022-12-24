import Foto from '../models/Foto';

const store = async (req, res) => { 
  console.log('file', req.file)
  
  try {
    const { originalname, path } = req.file;   
    const { aluno_id } = req.body;
    console.log('originalname', );    

    const foto = await Foto.create({ originalname, filename: path, aluno_id });

    return res.json(foto);
  } catch (e) {
    return res.status(400).json({
      errors: ['Aluno não existe'],
    });
  }
}

export const fotoController = {
  store,
}
