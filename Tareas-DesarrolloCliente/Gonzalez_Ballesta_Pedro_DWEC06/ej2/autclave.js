/*
Crea un documento HTML con el BODY vacío y escribe el código Javascript necesario para insertar un campo de texto deshabilitado 
(no se puede escribir en él con el teclado) a la izquierda y una consola de botones a la derecha.

En el campo de texto de la izquierda, cada vez que se carga la página, aparecerá una clave aleatoria formada por 5 caracteres. Los caracteres pueden ser los números del 1 al 6 y las letras de la A a la C.

En la consola de botones de la derecha, el usuario podrá presionar los botones correspondientes a esos 9 caracteres permitidos (6 números y 3 letras).

Estos 9 botones deben repartirse aleatoriamente, por seguridad.

También habrá un campo de texto deshabilitado para mostrar la secuencia presionada por el usuario. Sin embargo, en lugar de los caracteres 
presionados, se verán asteriscos, como es habitual en los campos de contraseñas.

Y habrá un botón “X”, para eliminar el último carácter introducido de la secuencia, y un botón “Validar”, que lanza la comprobación.

Debajo habrá un contenedor HTML donde podremos mostrar mensajes al usuario indicando si el código introducido es el correcto o no, tras comparar con la secuencia generada aleatoriamente a la izquierda.
*/


let claveAleatoria = document.createElement("input")
document.body.append(claveAleatoria)                
claveAleatoria.disabled="false"                 //Input disabilitado donde se mostrará la clave aleatoria
claveAleatoria.style.marginRight="50px"





document.body.style.display="flex"


let tabla = document.createElement("table")
tabla.border="1"                                //Tabla para poner el teclado y los numero introducidos con *
document.body.append(tabla)



let r1 = document.createElement("tr")
tabla.append(r1)

let r11= document.createElement("td")
r11.colSpan="3"                                 //Primera fila de la tabla
r1.append(r11)

let salidaTabla = document.createElement("input")       
salidaTabla.type="password"                             //Input de tipo password para ir mostrando la secuencia pulsada
salidaTabla.disabled="true"
r11.append(salidaTabla)




let r2 = document.createElement("tr")
tabla.append(r2)

let r21 = document.createElement("td")
r2.append(r21)
                                                    //Fila 2, primeras 3 celdas del teclado  
let r22 = document.createElement("td")
r2.append(r22)

let r23 = document.createElement("td")     
r2.append(r23)



let r3 = document.createElement("tr")
tabla.append(r3)

let r31 = document.createElement("td")
r3.append(r31)      
                                                    //Fila 3, segundas 3 celdas del teclado
let r32 = document.createElement("td")
r3.append(r32)

let r33 = document.createElement("td")
r3.append(r33)



let r4 = document.createElement("tr")
tabla.append(r4)

let r41 = document.createElement("td")
r4.append(r41)
                                                //Fila 4, terceras 3 celdas del teclado
let r42 = document.createElement("td")
r4.append(r42)

let r43 = document.createElement("td")
r4.append(r43)



let r5 = document.createElement("tr")
tabla.append(r5)

let r51 = document.createElement("td")
r51.style.cursor="pointer"
r51.colSpan="1"
r51.textContent="X"                            //Fila 5, celdas para borrar y validar la clave pulsada
r51.style.textAlign="center"
r5.append(r51)

let r52 = document.createElement("td")
r52.style.cursor="pointer"
r52.colSpan="2"
r52.textContent= "VALIDAR"
r5.append(r52)





    let elementosClave = new Array(9)

    elementosClave[0]="A"
    elementosClave[1]="B"
    elementosClave[2]="C"
    elementosClave[3]="1"                         //Array con los distintos valores posibles de la clave
    elementosClave[4]="2"
    elementosClave[5]="3"
    elementosClave[6]="4"
    elementosClave[7]="5"
    elementosClave[8]="6"
    
    let clave= ""

    for (let i=0; i<5; i++)
    {
        let aleatorio = Math.floor(Math.random()*9)         //Generación aleatoria de clave
        clave+= elementosClave[aleatorio]
    }
    
claveAleatoria.value=clave


let botones=[r21,r22,r23,r31,r32,r33,r41,r42,r43]          //Celdas del teclado ("botones")   

let prueba= 9


let intentoClave=""



botones.forEach(r => 
{
    let aleatorio = Math.floor(Math.random()*prueba)
    r.style.cursor="pointer"
    r.textContent=elementosClave[aleatorio] 
    r.style.textAlign="center"
    r.style.padding="10px"                              //Se escoge un elemento aleatorio de elementosClave (de los posibles elementos de la clave) y se establece en una celda.
    elementosClave.splice(aleatorio,1)                  //Tras eso se elimina de el array para que no se establezca + de 1 vez y se reduce el rango de generación de numero aleatorio para escoger el siguiente
    prueba--   



    r.addEventListener("click", function()
    {
        intentoClave+=r.textContent                 //Por cada celda se establece un eventlistener y se añade a intentoclave y se muestra por la salida(el intput password disabled) 
        salidaTabla.value=intentoClave    
    })

});


r51.addEventListener("click",function()
{
    intentoClave= intentoClave.slice(0,intentoClave.length-1)           //Añadimos funcionalidad a la X para borrar el ultimo elemento introducido 
    salidaTabla.value=intentoClave
})


let resultado = document.createElement("h2")                //Creamos un elemento para mostrar el resultado de la validación
document.body.append(resultado)

r52.addEventListener("click", function()
{
    if(intentoClave==claveAleatoria.value)
    {
        resultado.textContent=("Enhorabuena, clave correcta.")              //Comprobamos si la clave aleatoria y la introducida son iguales.
    }
        else
        {
            resultado.textContent=("Clave incorrecta, introduzca otra.")
        }

})