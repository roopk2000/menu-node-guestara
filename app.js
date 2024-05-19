const express=require("express");
const app=express();
const PORT=8080
app.use(express.json());
const route=require("./routes/menu.route");

app.use("/",route);




app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`);
});


module.exports= {app};