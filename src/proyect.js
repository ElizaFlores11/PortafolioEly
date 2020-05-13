export const renderProyect = () =>{
    let proyectView = `
    <div class="proyect">
        <div class="descripcion-proyect">  
            <h2>TRIPLIFE </h2>
            <p>Social Network, para viajeros creada para compartir y recordar tus historias,
             fotos y tips con otros viajeros que disfrutan vivir a través de los viajes. </br> </p>
             <a href="https://github.com/ElizaFlores11/cipher/tree/master/src" target="_black" class="links">Repositorio</a>
             <a href="#" class="links">Demo</a>
             </br></br></br>
        </div>
        <div class="descripcion-proyect">  
            <h2> RICK & MORTY</h2>
            <p> Data de Rick and Morty, para seguir aprendiendo DOM, HTML y Js Se trabajo en dupla para poder avanzar y 
            poder entender como piensa, buena comunicación con las compañeras</p>
            <a href="https://github.com/ElizaFlores11/CDMX009-Data-Lovers" target="_black"  class="links">Repositorio</a>
             <a href="#"  class="links">Demo</a>
             </br></br></br>
        </div>
        <div class="descripcion-proyect">  
            <h2>BULLYING SCHOOL </h2>
            <p>Se utiliza para enviar mensaje ocultos a los profesores, cuando los estudiantes 
            son amenazados y tienen miedo de expresarlo a un profesor o tutor</p>
            <a href="https://github.com/ElizaFlores11/CDMX009-Social-Network"  class="links">Repositorio</a>
             <a href="#"  class="links">Demo</a>
             </br></br></br>
        </div>
    </div>
        `; 
    root.innerHTML = proyectView; 
} 
