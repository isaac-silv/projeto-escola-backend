import { Router } from 'express';
import { checkUser } from '../controllers/CheckController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, checkUser.index);

export default router;
