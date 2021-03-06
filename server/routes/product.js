import { Router } from "express"
import productCtrl from "../controllers/product.controller"

const router = Router ()
router.get ('/', productCtrl.readProduct)
router.get('/:prod_id', productCtrl.findProduct);
router.get('/getblokir/:acco_id', productCtrl.selectBlokir)
router.get('/getabis/:acco_id', productCtrl.selectAbis)
router.get('/getaccount/:acco_id', productCtrl.selectAccount)
router.get('/ga/get-admin', productCtrl.selectAdmin)
router.post('/', productCtrl.addProduct);
router.post('/:tambahproduct', productCtrl.addProduct);
router.put('/:prod_id', productCtrl.editProduct);
router.put('/stock/:prod_id', productCtrl.editProductStock);
router.put('/blokir/:prod_id', productCtrl.updateStatus);
router.put('/priorty/:prod_id', productCtrl.updatePriorty);
router.delete('/:prod_id', productCtrl.deleteProduct);

export default (router)