import { Router } from 'express';
import {sequelize, Op} from '../models/IndexModel';

const findStatus = async (req, res) => {
  const status = await req.context.models.status.findByPk(req.params.stat_name);
  return res.send(status);
};
const readStatus = async(req,res)=> {
    const status = await req.context.models.status.findAll(
        // {
        //     include: [{
        //         model: req.context.models.status
        //     }]
        //   }
    )
    return res.send(status);
}

// const findStatus = async (req, res) => {
//     const status = await req.context.models.status.findByPk(
//       req.params.statusId,{
//         include: [{
//             model: req.context.models.status
//         }]
//       }
//     );
//     return res.send(status);
// };

const addStatus = async (req, res) => {
    const {stat_name,stat_desc, stat_module} = req.body;
    const status = await req.context.models.status.create({
      stat_name: stat_name,
      stat_desc: stat_desc,
      stat_module : stat_module,
    });
    return res.send(status);
};
const editStatus = async (req, res) => {
    const {stat_name, stat_desc, stat_module} = req.body;
    const status =  await req.context.models.status.update({    
        stat_name: stat_name,
        stat_desc : stat_desc,
        stat_module: stat_module
     }, {
        where: { stat_name: req.params.state_name }
          });
        return res.sendStatus(200);
  };

  const deleteStatus = async (req, res) => {
    const result = await req.context.models.status.destroy({
      where: { stat_name: req.params.stat_name },
    });
  
    return res.send(true);
  };
export default {
    findStatus,  
    readStatus,
    addStatus,
    editStatus,
    deleteStatus
}