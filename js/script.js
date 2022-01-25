


/* Esta pidiendo un numero que sea menor o igual a -10 */
/*
let num = 1
while (num >= -10) {
    alert (num)
    num -- // Incrementa de a 1
}
alert ("El número es mayor a 10") 
*/







// for
/*
for (let i = 0; i < 10; i++) {
    alert ("i vale=" +i)
}
*/


// Lo mismo seria
/*
let x=0
for (x; x < 10; x++ )
*/





// Tabla de multiplicar
/* let dato = parseInt (prompt ("Ingrese un número"))
for (let num=1 ; num<=10 ; num++){
    /*if (num==5){
        break; //se corta despues del 5 y no sigue, se abre directamente la web
    }*
if (num==5){
    continue; //continua despues del 5 hasta el numero que le pediste 
}


    let resultado = dato * num
    alert (dato + "X" + num + "=" + resultado)
} */


/*
let dia = prompt ("Ingrese un día").toLocaleLowerCase()
    switch (dia) {
        case "lunes":
            alert ("Andá a laburar")
            break;
        case "martes":
            alert ("Andá a laburar")
            break;  
        case "miercoles":
            alert ("Andá a laburar")
            break; 
        default:
            alert ("Hoy no laburas")
            break; 
    }
*/






// While - ciclo por condicion. Asumimos que en algun momneto la reptición va a finalizar: si la comparación no se realiza adecuadamente podemes generar el llamado "bucle infinito"

// crear el mensaje 1 vez. usamos alert
/*
alert ("Hola")
*/

// Bucle
/*
let nombre = prompt ("Ingrese su nombre")
while (nombre != "a"){
    alert ("Hola " + nombre)
}
*/

// do while
/*
let nombre = prompt ("Ingrese su nombre")
do {
    alert ("Hola " + nombre) //ejecuta
    nombre = prompt ("Ingrese otro nombre")
} while (nombre != "a")
*/


/*
let numero = 0;
do {
    numero = prompt ("Ingrese un numero")
    console.log (numero);
} while (parseInt(numero));
*/


/*
num ++ //incremeta de a 1
num + =1 // tambien se puede usar para + - * /
*/

// progreso que muestra todos los numeros del 1 al 10
/*
let num = 1
while (num >= -10) {
    alert (num)
    num --
}
alert ("El número es mayor a 10")
*/    


let dia = prompt ("Ingrese un día").toLocaleLowerCase()
switch (dia) {
    case "lunes":
        alert ("Podes ingresar")
        break;
    case "martes":
        alert ("Podes ingresar") 
        break;
    case "miercoles":
        alert ("Podes ingresar")
        break;
    case "jueves":
        alert ("Podes ingresar")
        break;
    case "viernes":
        alert ("Podes ingresar")
        break;
    case "sabado":
        alert ("Bienvenido/a, buen fin de semana")
        break;
    case "domingo":
        alert ("Bienvenido/a, buen fin de semana")
        break;
}



let nombre = prompt ("Ingrese su nombre")
while (nombre != "a") {
    switch (nombre) {
        default:
            alert("Bienvenido " + nombre)
            break;
    }
    alert("Que tengas una buena navegación")
    break;
}



let edad = parseInt (prompt("Ingresa tu edad"));
for (let num = 0 ; num >= 1; num++) {
    alert ("En caso de error, presione de nuevo en aceptar")
}


function avisar (){
    alert("Ahora se va a calcular el precio de serivicio con IVA")
}
avisar();

/*
function servicios (emailMarketing, communityManager, copyWriting, iva, operacion) {
    switch (operacion){
        case "*":
            return emailMarketing * iva;
            
        case "*":
            return communityManager * iva;
            
        case "*":
            return copyWriting * iva;
            
    }
}
console.log(servicios(200, 500, 350, 1.21, "*"));

function iva(emailMarketing, communityManager, copyWriting, iva) {
    let resultado = emailMarketing * iva;
    let resultado = communityManager * iva;
    let resultado = copyWriting * iva;
}
console.log (resultado) ; */



