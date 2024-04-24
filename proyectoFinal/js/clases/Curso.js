
export default class Curso{
    constructor(nombre,poster,clases,profesor){
        this.nombre = nombre
        this.poster = poster
        this.clases = clases 
      this.profesor = profesor     
        this.inscritos =[]
    }

    //////////get/////////
    getNombre(){return this.nombre}
    getPoster(){return this.poster}
    getClases(){return this.clases}
    getClases(){return this.profesor}
    getInscritos(){return this.inscritos}
    //////////Set/////////
    setNombre(){return this.nombre}
    setPoster(){return this.poster}
    setclases(){return this.clases} 
    setclases(){return this.profesor} 
    setInscritos(){return this.inscritos}

    
    MosratCursos(){
        const elemento = document.getElementById("cursos");
        const hijo =document.createElement("div");
        hijo.innerHTML=`
       <article class="card">
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="${this.getPoster()}" alt="">
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 class="t5 s-mb-2 s-center">
          ${this.getNombre()}
          </h3>
          <div class="s-mb-2 s-main-center">
            <div class="card__teacher s-cross-center">
              <div class="card__avatar s-mr-1">
                <div class="circle img-container">
                  <img src="path/img" alt="">
                </div>
              </div>
              <span class="small">${this.profesor}</span>              
            </div>
          </div>
          <div class="s-main-center">
            <a class="button--ghost-alert button--tiny" href="#">Clases: ${this.getClases()} </a>
          </div>
        </div>
      </article>`
      elemento.appendChild(hijo);
        }   
}




