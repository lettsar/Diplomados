import {readFileSync,writeFileSync} from "fs"
import { createInterface } from "readline";
import chalk, { Chalk } from "chalk";
import { Console } from "console";

const tasks = [];
const DB_FILE = "tasks.txt"
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.yellow.bold("🖥️  To Do App  🖥️"));
  console.log("1. Agregar Tarea ");
  console.log("2. Listar Tareas");
  console.log("3. Completar Tarea");
  console.log("4. Salir");
}
function agregarTarea() {
  rl.question("Escribe la Tarea: ", (task) => {
    tasks.push({ task: task, completed: false });
    console.log(chalk.green.bold("Tarea Agregada \n\n"));
    displayMenu();
    chooseOption();
  });
}
function listarTareas() {
  if (tasks.length === 0) {
    console.log("No Exite Tareas \n\n");
    displayMenu();
    chooseOption();
  } else {
    console.log(chalk.yellow("\n Tareas \n"));
    tasks.forEach((task, index) => {
      let status = task.completed ? "✔︎" : "✖︎";
      if (task.com) {
        console.log(
          chalk.greenBright(`${index + 1}. ${status} - ${task.task}`)
        );
      } else {
        console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
      }
    
    });
  }
  displayMenu()
  chooseOption()
}
function completarTarea(){
    rl.question("Ingresa el Numero de Tarea Completa",(numero)=>{
        let index = parseInt(numero)-1
        if(index >= 0 && index < tasks.length){
            tasks[index].completed=true;
            console.log(chalk.green.bold(`${numero}✔︎ Tarea Realizada \n\n`))
        }else{
            console.log(chalk.red.bold("✖︎ Numero de Tarea Invalido \n\n"))
        }
        displayMenu()
        chooseOption()
    })
}
function chooseOption() {
  rl.question("Elije una Opcion, Ingres el Numero de tu Opcion: ", (choice) => {
    switch (choice) {
      case "1":
        agregarTarea();
        break;

      case "2":
        listarTareas();
        break;

      case "3":
        completarTarea()
        break;

      case "4":
        console.log(chalk.yellow("🙂🙂🙂 Adios 🙂🙂🙂 "));
        break;
        rl.close();

      default:
        console.log(chalk.red("Opcion Invalida \n"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}
displayMenu();
chooseOption();
