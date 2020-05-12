export const renderSoft = () =>{
    let softView = `
    <div class="flex">
    <div class="skill">
    <table>
      <tr>
        <td colspan="3">
          <h1>SOFT SKILLS</h1>
        </td>
        </tr>
        <tr>
          <td>
            <img src="img/puntualidad.jpg" class="img-skills" />
            </br>
            <h2>Puntualidad</h2>
          </td>
          <td>
            <img src="img/disciplina.jpg" class="img-skills" />
            </br>
            <h2>Disciplina</h2>
          </td>
          <td>
            <img src="img/trabajo-equipo.jpg" class="img-skills" >
            <br>
            <h2>Trabajo en equipo</h2>
          </td>
        </tr>
          <tr>
            <td>
              <img src="img/contol-tiempo.jpg" class="img-skills">
              </br>
              <h2>Control de Tiempos</h2>
            </td>
            <td>
              <img src="img/empatia.jpg" class="img-skills">
              </br>
              <h2>Empatía</h2>
            </td>
            <td>
              <img src="img/establecer-rutinas.png" class="img-skills" >
              <br>
              <h2>Establecer rutinas de tiempo</h2>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <img src="img/capacidad-autoformacion.jpg" class="img-skills" >
              <br>
              <h2>Capacidad de autoformación</h2>
            </td>
          </tr>
        </table>
    </div>
  </div>`; 
    root.innerHTML = softView; 
}