import { Router } from "express";
import indexCtrl from "../controllers/IndexController";


const router = Router ()

router.post('/upload', indexCtrl.apiUploadDownload.uploadPhoto)
router.get('/download/:image' ,indexCtrl.apiUploadDownload.downloadPhoto)

export default router
