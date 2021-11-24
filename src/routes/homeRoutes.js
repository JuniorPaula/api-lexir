import { Router } from 'express';

/** importar os controllers */
import homeController from '../controllers/HomeController';

const router = new Router();

/** rotas da home */
router.get('/', homeController.index);
router.post('/', homeController.create);
router.get('/:id', homeController.show);
router.put('/:id', homeController.update);
router.delete('/:id', homeController.delete);

export default router;
