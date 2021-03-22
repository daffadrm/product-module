const readPrim = async(req,res)=> {
    if (req.params.prim_id){
        const prim = await req.context.models.productImages.findByPk(
            req.params.prim_id,
          );
        return res.send(prim);
    }
    else {
        const prim = await req.context.models.productImages.findAll();
        return res.send(prim);
    }   
}

const createPrim = async (req,res) =>{
    const {prim_filename, prim_path, prim_is_primary,prim_prod_id} = req.body;
    const prim = await req.context.models.productImages.create({
      prim_filename : prim_filename,
      prim_path: prim_path,
      prim_is_primary: prim_is_primary,
      prim_prod_id: prim_prod_id
    });
  
    return res.send(prim);
}

const updatePrim = async (req, res) => {
    const { prim_filename, prim_path, prim_is_primary,prim_prod_id } = req.body;
    const prim = await req.context.models.productImages.update(
      {
        prim_filename: prim_filename,
        prim_path: prim_path,
        prim_is_primary: prim_is_primary,
        prim_prod_id: prim_prod_id,
      },
      {
        where: {
          prim_id: req.params.prim_id
        }
      }
    );
  
    return res.sendStatus(200);
  };

const deletePrim = async (req, res) => {
    const result = await req.context.models.productImages.destroy({
      where: { prim_id : req.params.prim_id },
    });
  
    return res.sendStatus(200);
  };

export default {
    readPrim,
    updatePrim,
    createPrim,
    deletePrim
}