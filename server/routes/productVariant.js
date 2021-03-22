import { Router } from "express";
import provaCtrl from "../controllers/productVariant.controller";

const router = Router ();
router.get('/', provaCtrl.readProva)
router.get('/:prova_id', provaCtrl.findProva)
router.post('/', provaCtrl.createProva);
router.post('/:tambahproductvariant', provaCtrl.createProva);
router.put('/:prova_id', provaCtrl.updateProva);
router.delete('/:prova_id', provaCtrl.deleteProva);
export default (router)