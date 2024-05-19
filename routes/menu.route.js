const express=require("express");
const router=express();
const {createCategory, createSub, getCategory,getSubCategory,createItems, getItems, getCategoryById,getSubCategoryById,getItemById}=require("../controllers/menu.controller");


router.post("/category", createCategory);
router.post("/category/:id", createSub);
router.post("/:categoryId/:subId", createItems);
router.get("/allCategory", getCategory)//api to get all categories
router.get("/:categoryId",getCategoryById);//api to get a category by id
router.get("/category/:id", getSubCategory);//api to get all sub-categories under a category
router.get("/category/:categoryId/:subId",getSubCategoryById);//api to get a sub-category
router.get("/category/:categoryId/:subId",getItems);//api to get all the items in a sub-category
router.get("/category/:categoryId/:subId/:itemId",getItemById);//api to get an item

module.exports=router;