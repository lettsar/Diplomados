import express from "express"
import morgan from "morgan";
import cors from "cors"
import helmet from "helmet"
import path from "path";
import { fileURLToPath } from "url";
import taskControler from "./controllers/taskControllers.js" 
import errorsController from "./controllers/errorsController.js";


// Rutas de Aplicacion
const __dirname = fileURLToPath(new URL ('.',import.meta.url));

console.log(__dirname)

//Iniciamos APP
const app = express();
//AGregamos Puerto
const port = 3000;
//Configuracion
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
//Establece Motor de Plantillas
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')
//Carpeta 
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());//Parseo a JON
app.use(express.urlencoded({extended:false}));//Encode



//Rutas de Accesos
app.get("/",taskControler.getAlltask);
app.get("/add",taskControler.getAddTaskForm);
app.post("/add",taskControler.addTask);
app.get("/edit/:id",taskControler.getEditTaskForm);
app.post("/edit/:id",taskControler.editTask);
app.get("/complete/:id",taskControler.completeTask);
app.get("/uncomplete/:id",taskControler.unCompleteTask);
app.get("/delete/:id",taskControler.deleteTask);
//---------------------
app.use(errorsController.erro404)

app.listen(port,()=>{
    console.log(`Ajecutando http://localhost:${port}`)
})