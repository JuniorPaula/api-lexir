import { Router } from 'express';

/** importar os controllers */
import homeController from '../controllers/HomeController';

const router = new Router();

/** rotas da home */
router.get('/', homeController.index);

export default router;
