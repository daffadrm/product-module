import { sequelize } from 'express';

// select Brand
const allBrand = async (req, res) => {
    // console.log(req.context.models)
    if (req.body.brand_id) {
        const brand = await req.context.models.brand.findByPk(
            req.body.brand_id,
        );
        return res.send(brand);
    }
    else {
        const brand = await req.context.models.brand.findAll(
            {
                include: [{
                    model: req.context.models.product

                }
            ]
            }
        );
        // console.log(findAll())
        return res.send(brand);
    }
}


const addBrandMethod = async (req, res) => {
    const { brand_name } = req.body;

    const brand = await req.context.models.brand.create({

        brand_name: brand_name
    });
    return res.send(brand);

};

const deleteBrand = async (req, res) => {
    const result = await req.context.models.brand.destroy({
        where: { brand_id: req.params.brand_id },
    });

    return res.send(200);
};


const updateBrand = async (req, res) => {
    const { brand_name } = req.body;
    // console.log(cate_id);
    const brand = await req.context.models.brand.update(

        {
            brand_name: brand_name,
        },
        {
            where: {
                brand_id: req.params.brand_id
            }
        }
    );

    return res.send(200);
};


export default {
    allBrand,
    addBrandMethod,
    deleteBrand,
    updateBrand,
}