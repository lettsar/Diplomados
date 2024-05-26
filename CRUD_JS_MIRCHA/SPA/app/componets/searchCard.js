export function SearchCard(props){
    let {id,title,_embedded} = props;
    let slug = _embedded.self[0].slug;
    let img = _embedded.self[0].jetpack_featured_media_url;
    console.log(img)
   
return `
    <article class="post-card">
    <img src="${img}" alt=""></img>
    <h2>${title}</h2>
    <a href="#/${slug}" data-id="${id}">Ver Mas</a>
    </article>
    `
}