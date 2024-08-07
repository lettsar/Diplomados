let tasks = [
  { id: 1, title: "Tarea 1", complete: false },
  { id: 2, title: "Tarea 2", complete: true },
];

const getAlltask = (req, res) => {
    res.render("index",{title:"Lista de Tareas",tasks});
};
const getAddTaskForm = (req, res) => {};
const addTask = (req, res) => {};
const getEditTaskForm = (req, res) => {};
const editTask = (req, res) => {};
const completeTask = (req, res) => {};
const unCompleteTask = (req, res) => {};
const deleteTask = (req, res) => {};

export default {
  getAlltask,
  getAddTaskForm,
  addTask,
  getEditTaskForm,
  editTask,
  completeTask,
  unCompleteTask,
  deleteTask,
};
