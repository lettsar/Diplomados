const IncludeHtml = (el,url)=>{
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange", e=>{
    if(xhr.readyState !== 4) return;

    if(xhr.status >=200 && xhr.status <= 300){
        el.outerHTML = xhr.responseText;
        console.log()
    }else{
        let message = xhr.statusText || "Ocurrio un Error";
        el.outerHTML =`<div><p>Error: ${xhr.status}: ${message}</p></div>`;
    }
});
xhr.open("GET",url);
xhr.setRequestHeader("Content-Type", "text-html; charset=utf-8")
xhr.send();
}

document.addEventListener("DOMContentLoaded",e =>{
const attr = document.querySelectorAll("[data-include]")
attr.forEach(el => {
console.log(el.getAttribute("data-include"))
  IncludeHtml(el,el.getAttribute("data-include"));

})
})

console.log()

/* document.addEventListener("DOMContentLoaded", e=>{

    const includeHTML = (el,url)=>{

}

 attr.forEach(element => {
   console.log(element.getAttribute("[data-include]"))
 });
}) */