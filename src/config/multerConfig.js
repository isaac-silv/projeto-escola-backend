import multer from 'multer';
import { FirebaseStorage } from 'multer-firebase-storage';
import { extname, resolve } from 'path';

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }

    return cb(null, true);
  },
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
 };
