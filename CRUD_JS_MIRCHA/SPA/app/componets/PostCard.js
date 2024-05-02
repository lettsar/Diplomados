export function PostCard(props){
    let {date,title,slug,_embedded} = props
    let dateFormat = new Date(date).toLocaleDateString()
    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url:"assets/Favicon_Lettsar.png";

    return`
    <article class="post-card">
    <img src="${urlPoster}" alt=""></img>
    <h2>${title.rendered}}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a href="#${slug}">Ver Publicacion</a>
    </p>
    </article>`
}