export function Menu(){
      const $menu = document.createElement("nav")
     $menu.classList.add("menu");
     $menu.innerHTML=`
     <a href="#/">Home</a>
     <apan>-</span>
     <a href="#/search">Búsqueda</a>
     <apan>-</span>
     <a href="#/contacto">Contacto</a>
     <apan>-</span>
     <a href="#/aprendejs">Aprende JS</a>
     `;
    return $menu
}