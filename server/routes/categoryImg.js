import {Router} from 'express';
import IndexController from '../controllers/IndexController';
// import cateImg from '../controllers/categoryImg.controller';

const router = Router()

router.get('/', IndexController.categoryImg.allCateImg);
router.get('/:cateImgId', IndexController.categoryImg.allCateImg);
router.put('/:caim_id', IndexController.categoryImg.updateCateImg);
router.delete('/:caim_id', IndexController.categoryImg.deleteCateImg)
router.post('/', IndexController.categoryImg.addCateImg);

export default (router)