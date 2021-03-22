import {sequelize} from 'express';

// select condition
const allCond = async (req,res) => {
    console.log(req.context.models)
    if (req.body.cond_name){
        const cond = await req.context.models.condition.findByPk(
            req.body.cond_name,
          );
        return res.send(cond);
    }
    else {
        const cond = await req.context.models.condition.findAll( {
            include: [
				{
                model: req.context.models.product
            }]
    });
       
        return res.send(cond);
    }   
}

const addCond = async (req, res) => {
    const { cond_name, cond_desc } = req.body;

    const condition = await req.context.models.condition.create({

        cond_name: cond_name,
        cond_desc : cond_desc
    });
    return res.send(condition);

};

const deleteCond = async (req, res) => {
    const result = await req.context.models.condition.destroy({
        where: { condition_id: req.params.cond_name },
    });
    
    return res.send(200);
};


const updateCond = async (req, res) => {
    const { cond_desc } = req.body;
    // console.log(cate_id);
    const condition = await req.context.models.condition.update(
        
        {
            cond_desc : cond_desc
        },
        {
            where: {
                cond_name: req.params.cond_name
            }
        }
    );
    
    return res.send(200);
};


export default {
    allCond,
    addCond,
    deleteCond,
    updateCond,
}