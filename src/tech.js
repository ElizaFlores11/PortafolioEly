export const renderTech = () =>{
    let techView = `
    </br>
    <div class="proyect">
      <div class="descripcion-proyect">  
      <img src="img/html5_logo.png" class="img-skills" />
      <h2>HTML5</h2>
      </div>
      
      <div class="descripcion-proyect">  
        <img src="img/css3.png" class="img-skills" />
        <h2>CSS3</h2>
      </div>
      
      <div class="descripcion-proyect">  
      <img src="img/learn-javascript.png" class="img-skills" />
      <h2>Javascript </h2>
        </div>
      </div>
      </br>
      <div class="proyect">
      <div class="descripcion-proyect">  
      <img src="img/github.png" class="img-skills" />
      <h2>GitHub</h2>
      </div>
      
      <div class="descripcion-proyect">  
      <img src="img/figma.png" class="img-skills" />
      <h2>Figma</h2>
      </div>
      
      <div class="descripcion-proyect">  
        <img src="img/metodologias.jpg" class="img-skills" />
        <h2>Metodologías agiles </h2>
        </div>
      </div>
      </br>
    `; 
    root.innerHTML = techView; 
}