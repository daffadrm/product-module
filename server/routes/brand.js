import {Router} from 'express';
// import brandCtrl from '../controllers/brand.controller'
import IndexController from '../controllers/IndexController';

const router = Router()

router.get('/', IndexController.brand.allBrand);
router.get('/:brandId', IndexController.brand.allBrand);
router.post('/', IndexController.brand.addBrandMethod);
router.delete('/:brand_id', IndexController.brand.deleteBrand);
router.put('/:brand_id', IndexController.brand.updateBrand)


export default router;