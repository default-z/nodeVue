module.exports = app => {
    const experss = require("express");
    const router = experss.Router(); //experss子路由
    const category = require("../../models/category")

    //新增
    router.post('/categories',async (req,res)=>{
       const model = await category.create(req.body);
       res.send(model);
    });

    //修改
    router.put('/categories/:id',async (req,res)=>{
        const model = await category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model);
    });

    //列表
    router.get('/categories',async (req,res)=>{
        // const list = await category.find().limit(10);
        const list = await category.find().populate('parent').limit(10);//populate('parent')  指的是关联parent字段去查
        res.send(list);
    });

    //查详情
    router.get('/getCategoryById/:id',async (req,res)=>{
        const item = await category.findById(req.params.id);
        res.send(item);
    });

    //删除
    router.delete('/deleteCategoryById/:id',async (req,res)=>{
        await category.findByIdAndDelete(req.params.id);
        res.send({
            success: true
        });
    });

    app.use('/web/api',router);
}
