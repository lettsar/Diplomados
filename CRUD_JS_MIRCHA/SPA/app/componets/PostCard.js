export function PostCard(props){
    let {date,id,title,slug,_embedded} = props
    let dateFormat = new Date(date).toLocaleDateString()
    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url:"assets/Favicon_Lettsar.png";
   
    document.addEventListener("click", e=>{    
      console.log(e.target)
        if(e.target.matches(".post-card a")){
        localStorage.setItem("wpPostId",e.target.dataset.id)
    
        }
        
})

    return`
    <article class="post-card">
    <img src="${urlPoster}" alt=""></img>
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a href="#${slug}" data-id="${id}">Ver Publicacion</a>
    </p>
    </article>`

}