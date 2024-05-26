import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import wp_api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { SearchCard } from "./searchCard.js";

export async function Router() {
  const d = document;
  const w = window;
  const $main = d.getElementById("main");
  let { hash } = location;
  $main.innerHTML = null;

  /////////////////Si se encuentra Home//////////////
  if (!hash || hash === "#/") {
    console.log(hash);

    await ajax({
      url: wp_api.POSTS,
      cbSuccess: (posts) => {
        let html = "";
        posts.forEach((post) => {
          html += PostCard(post);
          console.log(post);
        });
        $main.innerHTML = html;
      },
    });
    /////////////////Si se encuentra Busqueda//////////////
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");
    
    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }
    await ajax({
      url: `${wp_api.SEARCH}${query}`,
      cbSuccess: (search) => {
        let html = "";
        search.forEach((card) => {
          html += SearchCard(card);
          console.log(card);
        });
        $main.innerHTML = html;
      },
    });
    /////////////////Si se encuentra Contacto//////////////
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Seccion del Contacto</h2>";
  } else {
    await ajax({
      url: `${wp_api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }
  document.querySelector(".loader").style.display = "none";
}
