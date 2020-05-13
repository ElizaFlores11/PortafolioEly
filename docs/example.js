export const example = () => {
  // aquí tu código
}
export const renderLogin = () =>{
  console.log('You are here, in login.js');
  let main = document.querySelector('#main');

  let loginView =  `
    <div class="container">
        <figure>
            <img src="images/logo.png" alt="">
        </figure>
        <input type="text" name="email" id="loginEmail" placeholder="Email">
        <input type="password" name="password" id="loginPsw" placeholder="Password">
        <span id="errorMsg"> Hay un error, verifica tus datos.</span>
        <input id="loginBtn" type="button" value="Log in">
        <p id="forgotPsw"> <span><u>¿Olvidaste tu contraseña?</u></span> </p>
        <p>O bien ingresa con...</p>
        <div class="social-media">
            <i class="fab fa-facebook-f" id="facebook"></i>
            <i class="fab fa-google"></i>
        </div>
        <p>¿No tienes una cuenta? <u id="signinLink">Regístrate</u></p>
    </div> 
  `
  main.innerHTML = loginView;
}
