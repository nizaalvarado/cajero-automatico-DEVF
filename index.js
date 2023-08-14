const botonSaldo = document.getElementById('consSaldo');
let saldoInicial = 120; 


    function sumaDeSaldos (){
        saldoActual.innerHTML = 'Tu saldo es de: ' + saldoInicial + ' pesos.'
        setTimeout(() => {
            saldoActual.innerHTML = ''
        }, 7000);
    }

    function saldoTotal(){
        sumaDeSaldos();
    }


function ingresarMonto (){
    let montoAIngresar = parseInt(document.getElementById('cantidad').value);
    if (saldoInicial + montoAIngresar > 990){
        document.getElementById('alertaDeposito').innerHTML = ('Lo siento, no puede tener más de $990 en su cuenta.');
    setTimeout(() => {
        alertaDeposito.innerHTML = ''
    }, 7000);
    }else if (saldoInicial + montoAIngresar < 989){ 
        document.getElementById('alertaDeposito').innerHTML = ('Se depositó correctamente la cantidad de ' + montoAIngresar + ' pesos. Consulte su saldo actual.');
    setTimeout(() => {
        alertaDeposito.innerHTML = ''
    }, 7000);
    saldoInicial += montoAIngresar;
    sumaDeSaldos();
}}

function retirarMonto (){
    let montoARetirar = parseInt(document.getElementById('cantidad').value);
    if (montoARetirar >= saldoInicial){
        document.getElementById('alertaRetiro').innerHTML = ('Lo siento, tiene que tener al menos $10 en su cuenta.');
    setTimeout(() => {
        alertaRetiro.innerHTML = ''
    }, 7000);
    } else if (montoARetirar + saldoInicial < 10){document.getElementById('alertaRetiro').innerHTML = ('Lo siento, tiene que tener al menos $10 en su cuenta.');
    setTimeout(() => {
        alertaRetiro.innerHTML = ''
    }, 7000); } else{
        document.getElementById('alertaRetiro').innerHTML = ('Se retiró correctamente la cantidad de ' + montoARetirar + ' pesos. Consulte su saldo actual.');
    setTimeout(() => {
        alertaRetiro.innerHTML = ''
    }, 7000); 
    saldoInicial -= montoARetirar;
    sumaDeSaldos();
}}

const botonSalida = document.getElementById('regresarPag');

function regresarInicio(){
    window.location.href = 'index.html';
}







//Siempre que pongamos validaciones tenemos que ir de lo más específico a lo más general;
