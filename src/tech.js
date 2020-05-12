export const renderTech = () =>{
    let techView = `
    <div class="flex">
    <div class="skill">
      <table>
        <tr>
          <td colspan="3">
            <h1>TECH SKILLS</h1>
          </td>
          </tr>
          <tr>
            <td>
              <img src="img/html5_logo.png" class="img-skills" />
              </br>
              <h2>HTML5</h2>
            </td>
            <td>
              <img src="img/css3.png" class="img-skills" />
              </br>
              <h2>CSS3</h2>
            </td>
            <td>
              <img src="img/learn-javascript.png" class="img-skills" />
              </br>
              <h2>Javascript </h2>
            </td>
          </tr>
            <tr>
              <td>
                <img src="img/github.png" class="img-skills" />
                </br>
                <h2>GitHub</h2>
              </td>
              <td>
                <img src="img/figma.png" class="img-skills" />
                </br>
                <h2>Figma</h2>
              </td>
              <td>
                <img src="img/metodologias.jpg" class="img-skills" />
                </br>
                <h2>Metodologías agiles </h2>
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/php.png" class="img-skills" />
                </br>
                <h2>Balsamic</h2>
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/php.png" class="img-skills" />
                </br>
                <h2>Php </h2>
              </td>
              <td>
                <img src="img/mysql.png" class="img-skills" />
                </br>
                <h2>MySql</h2>
              </td>
            </tr>
      </table>
    </div>
  </div>
  </div>
    `; 
    root.innerHTML = techView; 
}