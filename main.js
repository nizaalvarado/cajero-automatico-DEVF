//página de inicio de sesión. 
const usersDB = [
    {
        user: "Niza",
        pass: "123",
        saldo: '130'
    },
    {
        user: "Jorge",
        pass: "123",
        saldo: '150'
    },
    {
        user: "Norma",
        pass: "123",
        saldo: '100'
    },
    {
        user: "JCarlos",
        pass: "123",
        saldo: '200'
    },
    {
        user: "Yahir",
        pass: "123",
        saldo: '100'
    },
]


const formulario = document.getElementById ("formulario");


function validar(usuario, password){
    for(let index = 0; index < usersDB.length; index++){
        if(usuario === usersDB[index].user && password === usersDB[index].pass){
            return window.location.href = 'inicio.html';
        }
        else{
                mostrarError("Password");
        }
        
        
        mostrarError('usuario');
        
    }
}


function mostrarError(tipo){
    let errorAMostrar = document.getElementById(`error${tipo}`);

    errorAMostrar.classList.remove("esconder");
    errorAMostrar.classList.add("error");
    setTimeout(()=>{
        errorAMostrar.classList.remove("error");
        errorAMostrar.classList.add("esconder"); 
    }, 4000);
}


formulario.addEventListener('submit', (event)=>{
    event.preventDefault()
    let usuarioIngresado = document.getElementById('usuarioHTML').value
    let passwordIngresada = document.getElementById('passwordHTML').value
    validar(usuarioIngresado, passwordIngresada)
})

