const findProduct = async (req, res) => {
	const product = await req.context.models.product.findByPk(req.params.prod_id,
		{include:[
			{model:req.context.models.productImages},
			{model:req.context.models.productVariant}]});
	return res.send(product);
};

const readProduct = async (req, res) => {
	const product = await req.context.models.product.findAll(
		{
			include: [{
				model: req.context.models.account
			},{
				model: req.context.models.brand
			}, {
				model: req.context.models.category
			}, {
				model: req.context.models.condition
			},{
				model: req.context.models.productVariant
			},

			{ 
				model: req.context.models.productImages },

			]
		}
	)
	return res.send(product);
}

const addProduct = async (req, res) => {
	const {
		prod_name,
		prod_desc,
		prod_price,
		prod_stock,
		prod_expire,
		prod_weight,
		prod_cate_id,
		prod_brand_id,
		prod_acco_id,
		prod_cond_name,
	} = req.body;
	console.log('wait')
	try {
	const product = await req.context.models.product.create({
		
		prod_name: prod_name,
		prod_desc: prod_desc,
		prod_price: prod_price,
		prod_stock: prod_stock,
		prod_expire: prod_expire,
		prod_weight: prod_weight,
		prod_cate_id: prod_cate_id,
		prod_brand_id: prod_brand_id,
		prod_acco_id: prod_acco_id,
		prod_cond_name: prod_cond_name,
	})
	return res.send(product)
} catch (error) {
	console.log(error)
	res.send({error:true})
}
}

const editProduct = async (req, res) => {
	const {
		prod_name,
		prod_desc,
		prod_price,
		prod_stock,
		prod_expire,
		prod_weight,
		prod_cate_id,
		prod_brand_id,
		prod_acco_id,
		prod_cond_name,
	} = req.body;
	try{
	const product = await req.context.models.product.update({
		prod_name: prod_name,
		prod_desc: prod_desc,
		prod_price: prod_price,
		prod_stock: prod_stock,
		prod_expire: prod_expire,
		prod_weight: prod_weight,
		prod_cate_id: prod_cate_id,
		prod_brand_id: prod_brand_id,
		prod_acco_id: prod_acco_id,
		prod_cond_name: prod_cond_name,
	}, { returning:true,
		where: { prod_id: req.params.prod_id }
	}

	)
	return res.send(true)
} catch(error) {
	res.send({error:true})
}
}

const deleteProduct = async (req, res) => { 
	try {
		
		const deleteVariant = await req.context.models.productVariant.destroy({
			where: {prova_prod_id: req.params.prod_id}
		})
		const deleteImages = await req.context.models.productImages.destroy({
			where: {prim_prod_id: req.params.prod_id}
		})
		const result = await req.context.models.product.destroy({
			where: { prod_id: req.params.prod_id },
		});
	} catch (error) {
		console.log(error)
	}

	return res.send(true);
};

export default {
	findProduct,
	readProduct,
	addProduct,
	editProduct,
	deleteProduct
}