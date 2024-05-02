export function Loader(){
    const $Loader = document.createElement("img");
    $Loader.src="app/assets/loader-lettsar.gif";
    $Loader.alt ="Cargando...";
    $Loader.classList.add("loader");
    return $Loader;

}