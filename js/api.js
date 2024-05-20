let pagina= 1;
const btnAnterior = document.querySelector(".boton-anterior");
const btnSiguiente = document.querySelector(".boton-siguiente");


btnSiguiente.addEventListener('click', ()=>{
    if(pagina<1000){
    pagina += 1;
    cargarPeliculas();
    }
});
btnAnterior.addEventListener('click', ()=>{
    if(pagina>1){
    pagina -= 1;
    cargarPeliculas();
    }
});

const cargarPeliculas = async() =>{
  try{
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fa9cd93711237c74ce2cce5d634963cb&language=es-MX&page=${pagina}`);
    
    console.log(respuesta);
    if(respuesta.status ===200){

    const datos = await respuesta.json();
    let peliculas = " ";
    datos.results.forEach(pelicula=>{
      peliculas += `
        <div class="cards-api card" data-aos="fade-up" data-aos-offset="300" data-aos-delay="50" data-aos-duration="1000">
        <img class="pelicula-api scroll-reveal-img" src=https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
        <div class="titulo-pelicula">
        <h4 class="titulo-api">${pelicula.title}</h4>;
        </div>
        </div>`
      
    });

    document.getElementById('contenedor-api').innerHTML = peliculas;

    }else if(respuesta.status === 401){
      console.log('Pusiste key errónea');
    }else if(respuesta === 404){
      console.log("La película que buscas no existe");
    }else{
      console.log("Hubo error");
    }

}catch(error){
    console.log(error);
  }
}

cargarPeliculas();
