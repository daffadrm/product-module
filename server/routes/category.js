import {Router} from 'express';
// import cateCtrl from '../controllers/category.controller'
import IndexController from '../controllers/IndexController';


const router = Router()

router.get('/', IndexController.category.allCategory);
router.get('/:cateId', IndexController.category.allCategory);
router.put('/:cate_id', IndexController.category.updateCate);
router.delete('/:cate_id', IndexController.category.deleteCate)
router.post('/', IndexController.category.addCate);

export default router;