import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";
import chalk, { Chalk } from "chalk";
import { Console } from "console";

const tasks = [];
const DB_FILE = "tasks.txt";
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
function addTask() {
  rl.question("Escribe la Tarea: ", (task) => {
    tasks.push({ task: task, completed: false });
    console.log(chalk.green.bold("Tarea Agregada desde AddTask \n\n"));
    saveTask();
    displayMenu();
    chooseOption();
  });
}

function loadTask() {
  try {
    const data = readFileSync(DB_FILE,"utf-8");
    const lines = data.split("\n");
    tasks.length = 0;
    lines.forEach((line) => {
      if (line.trim() !== "") {
        const [task, completed] = line.split("|");
        task.push({ task, completed: completed === true });
      }
    });
    console.log(chalk.green.bold("Las tareas se han cargado en desde la DB"));
  } catch (error) {
    console.log(chalk.red.bold("No Hay Tareas por Hacer \n"));
  }
}
function saveTask() {
  const data = tasks.map((task) => `${task.task}|${task.completed}`).join("\n");
  writeFileSync(DB_FILE,data,"utf-8");
  console.log(chalk.green.bold("Tarea Agregada a la BD con Exito desde SaveTask \n\n"));
  console.log();
}

function listTareas() {
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
  displayMenu();
  chooseOption();
}
function completeTask() {
  rl.question("Ingresa el Numero de Tarea Completa", (numero) => {
    let index = parseInt(numero) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log(chalk.green.bold(`${numero}✔︎ Tarea Realizada \n\n`));
    } else {
      console.log(chalk.red.bold("✖︎ Numero de Tarea Invalido \n\n"));
    }
    displayMenu();
    chooseOption();
  });
}
function chooseOption() {
  rl.question("Elije una Opcion, Ingres el Numero de tu Opcion: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;

      case "2":
        loadTask()
        break;

      case "3":
        completeTask();
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
loadTask();
displayMenu();
chooseOption();
