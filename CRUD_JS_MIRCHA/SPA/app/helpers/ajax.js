export async function ajax(props){
    try {
        let {url,cbSuccess,} = props
        let res = await fetch(url);
        let json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        cbSuccess(json)
    } catch (error) {
        let message = error.statusText || "Ocurrio Error al Accedes a la API";
       document.getElementById("posts").innerHTML =`
       <div class="error">
       <p>Error: ${error.status}:${message}</p>
       </div>
       `
    }
  
}