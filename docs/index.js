import { renderStart } from '../start.js';
import { renderSoft } from '../soft.js';
import { renderTech } from '../tech.js';
import { renderProyect } from '../proyect.js'; 
//let currentRoute = "/"
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')

const router = (route) => {
    root.innerHTML = ""
    switch (route) {
        case '/soft':
          renderSoft();
            break;
        case '/tech':
            renderTech();
            break;
        case '/proyects':
            renderProyect();
            break;
            default:
            renderStart();
            break;
    }
}
btns.forEach(btn => btn.onclick = e => router(e.target.id));
router(); 
//console.log(btns); 


/*let start = document.querySelector('#start'); 
let about = document.querySelector('#about');
let skills = document.querySelector('#skills');
let proyects = document.querySelector('#proyects');
let contact = document.querySelector('#contact');
let contentStart = document.querySelector("contentStart"); 
let contentAbout = document.querySelector("contentAbout");
let contentSkills = document.querySelector("contentSkills");
let contentProyects = document.querySelector("contentProyects");
let contentContact= document.querySelector("contentContact");

start.addEventListener('click', () =>{
  alert('Start');
}); 
about.addEventListener('click', () =>{
  console.log('About');
}); 
skills.addEventListener('click', () =>{
 contentProyects.style.display = 'block'; 
});
proyects.addEventListener('click', () =>{
  contentProyects.style.display = 'block'; 
}); 
contact.addEventListener('click', () =>{
  console.log('Contact'); 
});*/
