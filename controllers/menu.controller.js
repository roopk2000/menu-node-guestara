const { category } = require("../models/category.model");

const createCategory=async (req,res)=>{
try{
    const { name, image, description, taxApplicability, tax, taxType } = req.body;

    if(taxApplicability==true &&( tax==null || taxType==null))
        {
            return res.status(400).json({error:"Please give the tax and taxType also"})
        }
    const menu=  await category.create(req.body);//make sure to use the same name of the model as exported from models as it is a named export
    return res.status(200).json(menu);
}
catch(error){
    return res.status(400).json({error: error.message});
}
};

const createSub=async (req, res)=>{
    try{
        const {id}=req.params;
        const sub=req.body;
      
        
        const Category=await category.findById(id);
        if(Category==null){
            return res.status(200).json({error:"Item not found"});
        }
        console.log(Category.subCategory);

        const newSub=await Category.subCategory.push(sub);
        await Category.save();
        console.log(Category.subCategory);

        return res.status(200).json(newSub);

    }
    catch(error){
        return res.status(400).json({error:error.message});
    }
};


const createItems=async (req, res)=>{
    try{
      const {categoryId, subId}= req.params;
      console.log(categoryId)
      const Category= await category.findById(categoryId);
      console.log(Category)
      if(Category==null){
             return res.status(404).json({error:"This sub Category does not exist"});    
            
    }
    const Sub= await Category.subCategory.id(subId);
    console.log(Sub);
    Sub.items.push(req.body);

    await  Category.save();
    return res.status(200).json(Sub);


    

    }
    catch(error){
        console.log("Error has Occured");
        return res.statu(200).json({error:error.message});
    }
}






const getCategory=async (req, res)=>{
    try{
        const all=await category.find();
        return res.status(200).json(all);
    }
    catch(error){
        return res.status(400).json({error:error.message});
    }
};


const getCategoryById=async (req, res)=>{
try{
    const {categoryId}=req.params;
    const Category= await category.findById(categoryId);
    if(!Category){
        return res.status(404).json({error:"Category not found"});
    }
    return res.status(200).json(Category);
}
catch(error)
{
    return res.status(200).json({error:error.message});
}
};

const getSubCategory=async (req,res)=>{
    try {
        const { id } = req.params; // The ID of the category

        // Fetch the category document by its ID
        const categoryDoc = await category.findById(id);

        if (!categoryDoc) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Return all subcategories within the category
        return res.status(200).json(categoryDoc.subCategory);
    } 
catch(error){
    return res.status(400).json({error:error.message});
}
};


const getSubCategoryById=async(req, res)=>{
try{
    const { categoryId,subId } = req.params; // The ID of the category

        // Fetch the category document by its ID
        const Category = await category.findById(categoryId);

        if (!Category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Return all subcategories within the category
        return res.status(200).json(Category.subCategory.id(subId));
}
catch(error){
    return res.status(400).json({error:error.message});

}
};

const getItems=async (req,res)=>{
    try{
        const {categoryId, subId}=req.params;
        console.log(categoryId)
        const Category=await category.findById(categoryId);
        if(!Category){
            return res.status(404).json({error:"This subCategory does not exist"});
        }
        const Sub= await Category.subCategory.id(subId);
        console.log(Sub.items);

        return res.status(200).json(Sub.items);


    }
    catch(error){
        return res.status(400).json({error:error.message});
    }
};

const getItemById=async(req,res)=>{
try{
  const {categoryId,subId,itemId}=req.params;
  const Category= await category.findById(categoryId);
  const Sub=await Category.subCategory.id(subId);
  const Item= await Sub.items.id(itemId);
  return res.status(200).json(Item);
}
catch(error){
    return res.status(400).json({error:error.message});
}
};



const updateCategory=async (req,res)=>{
try{
    const {categoryId}=req.params;
    await category.findByIdAndUpdate(categoryId, req.body);
    const updatedCategory=await category.findById(categoryId);
    return res.status(200).json(updatedCategory);
}
catch(error){
    return res.status(400).json({error:error.message});
}
};


const updateSubCategory=async(req, res)=>{
    try{
        const {categoryId,subId}= req.params;
        const updateData=req.body;
        // console.log("A");
        const Category= await category.findById(categoryId);
        // console.log("A");

        const Sub= await Category.subCategory.id(subId);
        // console.log("A");

        Object.keys(updateData).forEach(key => {
            Category.subCategory[key] = updateData[key];
        });
        await Category.save();
        // console.log("A");
        const updatedSubCategory = Category.subCategory.id(subId);


        return res.status(200).json(updatedSubCategory);

    }
    catch(error){
        return res.status(400).json({error:error.message});
    }
};
const updateItem=async (req,res)=>{
    try{
        const {categoryId,subId,itemId}=req.params;
        const updateData=req.body;
        const Category= await category.findById(categoryId);
        const Sub=await Category.subCategory.id(subId);
        const Item= await Sub.items.id(itemId);

        Object.keys(updateData).forEach(key => {
            Item[key] = updateData[key];
        });
        await Category.save();

        const updatedItem = subCategory.items.id(itemId);

        return res.status(200).json(updatedItem);

    }
    catch(error){
        return res.status(400).json({error:error.message});
    }
};





module.exports={createCategory, createSub,getCategory,getSubCategory,createItems,getItems,getCategoryById,getSubCategoryById,
    getItemById,
    updateCategory,
    updateSubCategory,
    updateItem
};