import wp_api from "../helpers/wp_api.JS"
export function Title(){
    const $h1 = document.createElement("H1");
    $h1.innerHTML=`
    <a href="${wp_api.DOMAIN}" target="_blank" rel="noopener">
    ${wp_api.NAME.toUpperCase()}</a>`;
    
 

    return $h1;
}