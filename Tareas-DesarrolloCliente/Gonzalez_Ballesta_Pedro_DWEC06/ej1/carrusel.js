/*Ejercicio 1. Carrusel de imágenes controlado por teclado.

-Recupera varias imágenes de ejemplo (al menos 6) y llámalas “img1”, “img2” …

-Crea un documento HTML con el BODY vacío y escribe el 
código Javascript necesario para añadir un botón “Mostrar galería”.

-Al pulsar dicho botón, se mostrarán 3 de las imágenes. Es como un carrusel donde se muestra 
una foto en el centro y 2 fotos a los lados, indicando que si nos movemos a la izquierda 
o a la derecha la foto central cambiará por una de los lados.

-Captura los eventos de teclado de forma que podamos mostrar cada una de 
las imágenes desplazándonos con las flechas del teclado. Opcionalmente también podéis 
añadir botones con flecha izquierda y flecha derecha. También opcionalmente podéis hacer
 que cada 5 o 10 segundos el carrusel de fotos avance en una dirección.*/

 let header= document.createElement("div")
 header.id="header"                          //Creo un DIV donde introducir los botones
document.body.append(header)

 let btnmostrargaleria = document.createElement("button")
 btnmostrargaleria.textContent="Mostrar Galeria"
 btnmostrargaleria.style.width="200px"
 btnmostrargaleria.style.height="75px"
 btnmostrargaleria.style.borderRadius="100px"               //Boton para mostrar la galeria
 btnmostrargaleria.style.fontWeight="1000"
 btnmostrargaleria.style.backgroundColor="#8BC34A"
 btnmostrargaleria.style.margin="20px"

 header.append(btnmostrargaleria)

 document.body.style.display="flex"
 document.body.style.flexDirection="column"
 document.body.style.flexWrap="wrap"
 document.body.style.justifyContent="center"                //Estilos de el body del documento html
 document.body.style.alignItems="center"
 document.body.style.backgroundColor="powderblue"

 
let divimagenes = document.createElement("div")
document.body.append(divimagenes)
divimagenes.style.width="100%"
divimagenes.style.height="600px"
divimagenes.style.display="flex"                            //Div donde tendremos las imagenes del carrusel
divimagenes.style.justifyContent="space-around"
divimagenes.style.alignItems="center"
divimagenes.style.marginTop="40px"

for(let i=1; i<=3; i++)
   {
        let imagenx= document.createElement("img")
        imagenx.src="./imagenes/img"+i+".jpg"
        imagenx.id="imagen"+i
        imagenx.style.width="30%"                        //Creación y asignación de las distintas imagenes
        imagenx.style.height="500px"
      imagenx.style.opacity="0"
        divimagenes.append(imagenx)
   }


   let izquierda= document.querySelector("#imagen1")
   let imagencentral= document.querySelector("#imagen2")
   imagencentral.style.scale="1.15"
   let derecha= document.querySelector("#imagen3")

                                                               //Selección de las imagenes y creación de variables para controlar cual mostramos
   let imagenes= divimagenes.querySelectorAll("img")

   let imagenMedio=2
   let imagenDerecha= imagenMedio+1
   let imagenIzquierda= imagenMedio-1

   

let btnIzquierda = document.createElement("button")
btnIzquierda.textContent="<---"
btnIzquierda.id="btnIzquierda"
btnIzquierda.style.display="none"


                                                                  //Botones para mover el carrusel

let btnDerecha = document.createElement("button")
btnDerecha.textContent="--->"
btnDerecha.id="btnDerecha"
btnDerecha.style.display="none"


btnmostrargaleria.insertAdjacentElement("beforebegin",btnIzquierda)
btnmostrargaleria.insertAdjacentElement("afterend",btnDerecha)




let totalImganes= 12         //Donde establecemos el numero de imagenes que tenemos.
   
btnmostrargaleria.addEventListener("click",function()
{
  imagenes.forEach(imagen => 
   {
      imagen.style.opacity="1"                           //Mostramos las imagenes y los botones
      btnDerecha.style.display="inline"
      btnIzquierda.style.display="inline"
   });

   setInterval(carruselDerecha,5000)                     //Intervalo para que vayan rotando las imagenes automaticamente
   

   document.addEventListener("keyup",function(ev)
   {
      if(ev.key=="ArrowRight")
      {
         carruselDerecha()
            
      }                                                  //Una vez pulsado el btn de mostrar galeria, podemos mover las imagenes llamando a las funciones

      if(ev.key=="ArrowLeft")
         {
            carruselIzquierda()
         }
   })

   btnDerecha.addEventListener("click",carruselDerecha)           //Damos funcionalidad a los botones para mover a derecha o izquierda
   btnIzquierda.addEventListener("click",carruselIzquierda)

   

},{once:true})


function carruselIzquierda()
{
         imagenMedio++
         imagenDerecha++
         imagenIzquierda++

         if(imagenMedio>totalImganes)
         {
            imagenMedio=1
         }


         if(imagenDerecha>totalImganes)                     //Logica para mover las imagenes a la izquierda
         {
            imagenDerecha=1
         }


         if(imagenIzquierda>totalImganes)
            {
               imagenIzquierda=1
            }

            izquierda.src="./imagenes/img"+imagenIzquierda+".jpg"
            imagencentral.src="./imagenes/img"+imagenMedio+".jpg"
            derecha.src="./imagenes/img"+imagenDerecha+".jpg"
      
}


function carruselDerecha()
{
         imagenMedio--
         imagenDerecha--
         imagenIzquierda--

         if(imagenMedio<=0)
         {
            imagenMedio=totalImganes
         }

         if(imagenDerecha<=0)                   //Logica para mover las imagenes a la derecha
            {
               imagenDerecha=totalImganes
            }

         if(imagenIzquierda<=0)
            {
               imagenIzquierda=totalImganes
            }

            izquierda.src="./imagenes/img"+imagenIzquierda+".jpg"
               imagencentral.src="./imagenes/img"+imagenMedio+".jpg"
               derecha.src="./imagenes/img"+imagenDerecha+".jpg"
            
      
}