import { Router } from "express";
import accountCtrl from "../controllers/account.controller";

const router = Router()
router.get('/:acco_id', accountCtrl.readAccount)
router.get('/category/:acco_id', accountCtrl.readAccount)


export default (router)