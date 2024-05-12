import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import wp_api from "../helpers/wp_api.js";

export function Router() {
  const d = document;
  const w = window;
  const $posts = d.getElementById("posts");
  let { hash } = location;
  $posts.innerHTML = null;
  if (!hash || hash === "#/") {
    ajax({
        url:wp_api.POSTS,
        cbSuccess: posts =>{
            let html="";
            posts.forEach(post => {
                html+= PostCard(post)
                document.querySelector(".loader").style.display="none"
                console.log(post)
               $posts.innerHTMLL= html
            });
        }
    
      }) 
  } else if (hash.includes("#/search")) {
    $posts.innerHTML = "<h2>Seccion del Search</h2>";
  } else if (hash === "#/contacto") {
    $posts.innerHTML = "<h2>Seccion del Contacto</h2>";
  }
}

