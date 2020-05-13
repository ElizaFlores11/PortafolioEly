import { renderStart } from "./start.js";
import { renderSoft } from "./soft.js";
import { renderTech } from "./tech.js";
import { renderProyect } from "./proyect.js"; 

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
