import { Router} from 'express'
import primCtrl from "../controllers/productImages.controller"

const router = Router()

router.get('/', primCtrl.readPrim);
router.get('/:prim_id', primCtrl.readPrim);
router.post('/', primCtrl.createPrim);
router.post('/:tambahproductimages', primCtrl.createPrim);
router.put('/:prim_id', primCtrl.updatePrim);
router.delete('/:prim_id', primCtrl.deletePrim);

export default (router)