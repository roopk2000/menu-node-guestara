const express=require("express");
const router=express();
const {createCategory, createSub, getCategory,getSubCategory,createItems, getItems, getCategoryById}=require("../controllers/menu.controller");


router.post("/category", createCategory);
router.post("/category/:id", createSub);
router.post("/:categoryId/:subId", createItems);
router.get("/allCategory", getCategory)//api to get all categories
router.get("/:categoryId",getCategoryById);//api to get a category by id
router.get("/category/:id", getSubCategory);
router.get("/category/:categoryId/:subId",getItems);

module.exports=router;