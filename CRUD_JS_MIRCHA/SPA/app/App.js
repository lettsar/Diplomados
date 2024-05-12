
import { Loader } from "./componets/loader.js";
import { Header } from "./componets/headers.js";
import { Main } from "./componets/Main.js";
import {Router} from "./componets/Router.js";


export function App(){

const $root =   document.getElementById("root");
$root.innerHTML = null;
$root.appendChild(Header());
$root.appendChild(Loader());
$root.appendChild(Main());

Router();


}