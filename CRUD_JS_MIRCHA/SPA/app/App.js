
import { Loader } from "./componets/loader.js";
import { Header } from "./componets/headers.js";
import { Posts } from "./componets/posts.js";
import {Router} from "./componets/Router.js";


export function App(){

const $root =   document.getElementById("root");

$root.appendChild(Header());
$root.appendChild(Loader());
$root.appendChild(Posts());

Router();


}