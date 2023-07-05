const express =require("express")
const app =express();
const bodyPaser=require("body-parser");



app.use(bodyPaser.urlencoded())
app.use('/add',(req,res,next)=>{
    res.send('<h1>Add Product<h1><form action="/third" methods="POST"> <input type="text" name="title"/> <input type="Submit" value="submit"/></form>')
    next();
})

app.post('/thrid',(req,res,next)=>{
    console.log(req.body)

})

app.listen(3004)