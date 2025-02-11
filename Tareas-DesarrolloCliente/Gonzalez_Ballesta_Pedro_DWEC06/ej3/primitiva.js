/*Crea un documento HTML con el BODY vacío y escribe el código Javascript necesario para insertar 6 campos 
de texto deshabilitados. Escribe también código para incorporar en la web 49 elementos numerados que podremos presionar para encender o apagar.

Cada vez que se carga la página, la aplicación generará 6 valores aleatorios diferentes entre 1 y 49 y los mostrará en los 6 campos de texto deshabilitados ordenados de menor a mayor.

El usuario podrá encender un máximo de 6 números del 1 al 49. En cualquier momento podrá apagar números.

Debajo habrá un contenedor HTML donde podremos mostrar mensajes al usuario indicando si los números elegidos por el usuario coinciden 
con la secuencia generada aleatoriamente. Este mensaje se actualizará cada vez que el usuario enciende o apaga un número, quitando la necesidad de un botón adicional para validad/comprobar.

*/


document.body.style.display="flex"
document.body.style.flexDirection="column"          //Damos estilos al body para disponerlo todo correctamente
document.body.style.alignItems="center"
document.body.style.backgroundColor="powderblue"


let divCombinacion = document.createElement("div")
document.body.append(divCombinacion)
divCombinacion.style.width="800px"
divCombinacion.style.height="200px"                     //Creamos un div donde tendremos la combinación ganadora
divCombinacion.style.display="flex"
divCombinacion.style.justifyContent="center"
divCombinacion.style.alignItems="center"



let ganadora = new Array (6)
let posibilidades= new Array()

for (let a=0; a<49; a++)
{
    posibilidades[a]=a+1                    //Generamos un array con todos los numeros que pueden salir en el sorteo
}

for(let b=0; b<6;b++)
{
    let aleatorio= Math.floor(Math.random()*posibilidades.length)
    ganadora[b]= posibilidades[aleatorio]
                                                //Seleccionamos 6 valores del array de posibilidades, cada vez que seleccionamos un numero aleatoriamente lo suprimimos 
                                                // del array para que no se pueda repetir y hacemos más pequeño el .random para evitar pasarnos de los nuevos indices del array
    posibilidades.splice(aleatorio,1)

}

ganadora.sort((a, b) => a - b)              //Ordenamos el array ganador



for (let i = 0; i<6; i++)
{
    let combinacion = document.createElement("input")
    combinacion.id="numero"+i
    combinacion.type="text"
    combinacion.style.fontSize="30px"                  //Generamos unos valores de tipo input para añadir al div, estos estarán disabled para que no se pueda
    combinacion.style.width="133px"                   //interactuar con ellos. Cada uno tendrá un valor de la combinación ganadora.                   
    combinacion.style.height="100px"
    combinacion.style.textAlign="center"
    combinacion.disabled="true"
    combinacion.style.backgroundColor=""
    divCombinacion.append(combinacion)
    combinacion.value=ganadora[i]
    combinacion.style.fontWeight="700"
   
}





let divNumeros = document.createElement("div")
document.body.append(divNumeros)
divNumeros.style.width="600px"
divNumeros.style.height="600px"
divNumeros.style.display="flex"                         //Creamos un DIV donde tendremos todos los numeros que podemos marcar y le damos estilos
divNumeros.style.alignContent="flex-start"
divNumeros.style.justifyContent="center"
divNumeros.style.flexWrap="wrap"



let marcados= 0                         //Variable para controlar cuantos numeros hemos marcado (para no poder marcar más de 6)

let marked = new Array()                //Array donde introduciremos los valores marcados, para posteriormente compararlo con el array con la combinación ganadora




let resultado= document.createElement("h2")             //El resultado se mostrará con un H2
document.body.append(resultado)


for(let i=1; i<=49; i++)
{
   let numero = document.createElement("input")
   numero.type="text"
   numero.style.width="14%"
   numero.style.height="14%"
   numero.style.boxSizing="border-box"                  //Creamos los 49 inputs, estableciendo los estilos y valores de cada uno
   numero.style.textAlign="center"
   numero.style.border="1px solid black"
   numero.style.cursor="pointer"
   numero.readOnly="true"
   numero.value=i

    divNumeros.append(numero)
    numero.setAttribute("pulsado","false")      //Añadimos un atributo para comprobar si se ha pulsado o no el numero




   numero.addEventListener("click",function()               //Añadimos un eventlistener para cada input
   {    
        if(numero.getAttribute("pulsado")=="false")     //Si el numero no se ha pulsado (es false)
        {
            if (marcados<=5)                            //Su hemos pulsado 5 o menos, permitimos pulsar otro (cambiando el color, añadiendolo al array marked...)
            {
                numero.style.backgroundColor="#A9A9A9"
                numero.setAttribute("pulsado","true")
                marcados+=1

                marked.push(numero.value)                       
                marked.sort((a,b) => a-b)           //Una vez añadido el numero lo oredenamos de igual manera que el array con la clave correcta
                
                if (marked.length==6)
                {
                    comprobacion()          //Si hemos marcado los 6, comprobamos si el contenido de "marked" (lo marcado por nosotros), es igual que "ganadora" para decir si has ganado o no la primitiva
                } 
            }  
        }
            else
            {                                               //Si "pulsado"= true , al pulsarlo lo ponemos en blanco, lo eliminamos de marked y demás.
                numero.style.backgroundColor="white"
                numero.setAttribute("pulsado","false")          
                marcados-=1
                
                let posicion = marked.findIndex(num=> num==numero.value)

                marked.splice(posicion,1)
                marked.sort((a,b) => a-b)

                if (marked.length<6)                    //Si no tenemos 6 marcados, el texto lo dejamos en blanco (solo se accederá aquí si antes hemos puesto una combinación incorrecta y hemos desmarcado 1)
                    {
                        resultado.textContent=""
                    }
               
            }
    
   })
}



function comprobacion()
{
for (let x=0; x<6;x++)          //Función para comprobar si la marked y ganadora es igual.
{   
    if(ganadora[x]==marked[x])      
    {
        resultado.textContent="¡Enhorabuena! Los numeros introducidos coinciden con la combinación ganadora "
    }
        else
        {
            resultado.textContent="La combinación introducida no está premiada, más suerte la proxima vez"
            break;      
        }                               //Si algún numero no es igual, rompemos la ejecución para que no se sigan comprobando otros numeros

}
}