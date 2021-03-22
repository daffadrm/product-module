const findProva = async (req, res) => {
  const productVariant = await req.context.models.productVariant.findByPk(req.params.prova_id);
  return res.send(productVariant);
};

const readProva = async(req,res)=> {
    const productVariant = await req.context.models.productVariant.findAll(
        // {
        //     include: [{
        //         model: req.context.models.status
        //     }]
        //   }
    )
    return res.send(productVariant);
}

const createProva = async (req,res) =>{
    const { prova_name, prova_option, prova_prod_id} = req.body;
    console.log('wait')
    try {
      const productVariant = await req.context.models.productVariant.create({
        prova_name: prova_name,
        prova_option: prova_option,
        prova_prod_id: prova_prod_id
    });
  
    return res.send(productVariant);
    } catch (error) {
      // throw error
      res.send({error:true})
    }

}

const updateProva = async (req, res) => {
    const { prova_name, prova_option, prova_prod_id } = req.body;
    try {
    const productVariant = await req.context.models.productVariant.update(
      {
        prova_name: prova_name,
        prova_option: prova_option,
        prova_prod_id: prova_prod_id
      },
      {returning:true,
        where: {
          prova_id: req.params.prova_id
        }
      }
    );
  
    return res.sendStatus(200);
    } catch(error) {
      res.send({error:true})
    }
  };

const deleteProva = async (req, res) => {
    const result = await req.context.models.productVariant.destroy({
      where: { prova_id : req.params.prova_id },
    });
  
    return res.sendStatus(200);
  };


export default {
    findProva,
    readProva,
    createProva,
    updateProva,
    deleteProva
}