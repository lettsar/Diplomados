import { SearchForm } from "./SearchForm.js";
import { Menu } from "./menu.js";
import { Title } from "./title.js";

export function Header(){
    const $header = document.createElement("header");  
    $header.classList.add="header";
    $header.appendChild(Title());
    $header.appendChild(Menu())
    $header.appendChild(SearchForm())
 return $header

}