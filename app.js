let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//con esta función le asignamos valores a los elementos del HTML
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //parseInt, ya que debemos forzar al input a devolvernos un valor numerico y no un string
    if (numeroDeUsuario < 1 || numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento('p', "Por favor, ingresa un número del 1 al 10.");
        return; // Salir de la función si el número está fuera del rango
    }

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste. Lo hiciste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //con esta porcion de codigo lo que hacemos activar el boton "Reiniciar Juego"
        // una vez que ya hayamos jugado una partida.

    }else{
    //el usuario no acerto    
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor")
        }else{
            asignarTextoElemento('p',"El numero secreto es mayor")
        }
    intentos++;    
    }    
    limpiarCaja()
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si la lista ya se llenó
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numero posibles');
        }else{
        //si el numero ya salió sorteado
        if (listaNumerosSorteados.includes(numeroGenerado)){
            generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(numeroGenerado);
        }
        return numeroGenerado;      
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero secreto!!');
    asignarTextoElemento('p',`Indicame un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
condicionesIniciales();

