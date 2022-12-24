import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import FirebaseStorage from 'multer-firebase-storage';

import { fotoController } from '../controllers/FotoController';
import multer from 'multer';

const router = new Router();

const  Multer  =  multer({ 
    storage: FirebaseStorage({ 
      bucketName: process.env.FIREBASE_STORAGE_BUCKET, 
      credentials: { 
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
        projectId: process.env.FIREBASE_PROJECT_ID 
      },
      unique: true,
      public: true
    }) 
  } )

router.post('/', loginRequired, Multer.single('foto'), fotoController.store);

export default router;
