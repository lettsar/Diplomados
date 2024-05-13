import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import wp_api from "../helpers/wp_api.js";
import { Post } from "./Post.js";

export async function Router() {
  const d = document;
  const w = window;
  const $main = d.getElementById("main");
  let { hash } = location;
  $main.innerHTML = null;

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
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");   
    if (!query) return false;
    console.log(`${wp_api.SEARCH}${query}`)
    await ajax({
      url: `${wp_api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
      },
    });
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
