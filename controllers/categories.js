const Category = require("../models/categories");

exports.getCategories = (req, res)=>{
    Category.find()
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postCategory = (req, res)=>{
    const Category_Id = req.body.Category_Id;
    const CategoryName = req.body.CategoryName;

    const category = new Category({
        Category_Id:Category_Id,
        CategoryName: CategoryName
    })

    category.save()
    .then((result)=>{
        res.json({
            message:"category Added Successfully",
            categories : result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}