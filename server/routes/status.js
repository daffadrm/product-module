import { Router} from 'express'
import statusController from '../controllers/status.controller'

const router = Router()
router.get('/', statusController.readStatus)
router.get('/:stat_name', statusController.findStatus);
router.post('/', statusController.addStatus);
router.put('/:stat_name', statusController.editStatus);
router.delete('/:stat_name', statusController.deleteStatus);
export default (router)