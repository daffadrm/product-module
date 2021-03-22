

const allCateImg = async (req, res) => {
    // console.log(req.context.models)
    if (req.body.caim_id) {
        const caim = await req.context.models.categoryImg.findByPk(
            req.body.caim_id,
        );
        return res.send(caim);
    }
    else {
        const caim = await req.context.models.categoryImg.findAll(
            {
                include: [{
                    model: req.context.models.category
                }
                ]
            }
        );
        // console.log(findAll())
        return res.send(caim);
    }
}




const deleteCateImg = async (req, res) => {
    const result = await req.context.models.categoryImg.destroy({
        where: { caim_id: req.params.caim_id },
    });

    return res.send(200);
};



const updateCateImg = async (req, res) => {
    const { caim_path, caim_filename, caim_cate_id } = req.body;
    // console.log(cate_id);
    const categoryImg = await req.context.models.categoryImg.update(

        {
            caim_path: caim_path,
            caim_filename: caim_filename,
            caim_cate_id: caim_cate_id,
        },
        {
            where: {
                caim_id: req.params.caim_id
            }
        }
    );

    return res.send(200);
};

const addCateImg = async (req, res) => {
    const { caim_path, caim_filename, caim_cate_id } = req.body;
    const categoryImg = await req.context.models.categoryImg.create({
        caim_path: caim_path,
        caim_filename: caim_filename,
        caim_cate_id: caim_cate_id,
    });

    return res.send(categoryImg);
}

export default {
    allCateImg,
    // findCateImg,
    deleteCateImg,
    updateCateImg,
    addCateImg,
}