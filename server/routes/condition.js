import {Router} from 'express';
// import cateCtrl from '../controllers/category.controller'
import IndexController from '../controllers/IndexController';

const router = Router()

router.get('/', IndexController.condition.allCond);
router.get('/:condId', IndexController.condition.allCond);
router.put('/:cond_name', IndexController.condition.updateCond);
router.delete('/:cond_name', IndexController.condition.deleteCond)
router.post('/', IndexController.condition.addCond);

export default router;