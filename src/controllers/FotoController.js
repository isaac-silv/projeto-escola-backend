import admin from 'firebase-admin'
import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

const serviceAccount = require("../config/firebaseConfig.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();

const store = async (req, res) => {
  return upload(req, res, async (error) => {
    console.log('file', req.file)
    if (error) {
      return res.status(400).json({
        errors: [error.code],
      });
    }

    try {
      const { originalname } = req.file;
      const filename = Date.now() + "." + originalname.split(".").pop();
      const { aluno_id } = req.body;

      const file = bucket.file(filename);

      const stream = file.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });

      stream.on("error", (e) => {
        console.error(e);
      });
    
      stream.on("finish", async () => {
        //tornar o arquivo publico
        await file.makePublic();
             
        next();
      });
    
      stream.end(foto.buffer);

      const foto = await Foto.create({ originalname, filename, aluno_id });

      return res.json(foto);
    } catch (e) {
      return res.status(400).json({
        errors: ['Aluno não existe'],
      });
    }
  });
}

export const fotoController = {
  store,
}
