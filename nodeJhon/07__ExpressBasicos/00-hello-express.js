import express from "express";
const app = express();
app.get("/",(req,res)=>{
   res.send(`<h1>Hola Mundo es de Express JS</h1>`) 

});

app.listen(3000,()=>{
   console.log(`Iniciando Express desde http://localhost:3000`)
 
})