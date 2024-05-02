export function Menu(){
      const $menu = document.createElement("nav")
     $menu.classList.add("menu");
     $menu.innerHTML=`
     <a href="#/">Home</a>
     <apan>-</span>
     <a href="#/Search">Búsqueda</a>
     <apan>-</span>
     <a href="#/Search">Búsqueda</a>
     `;
    return $menu
}