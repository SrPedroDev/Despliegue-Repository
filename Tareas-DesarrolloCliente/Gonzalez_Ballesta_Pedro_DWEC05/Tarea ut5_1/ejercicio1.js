/*
-Completa el archivo ejercicio1.js para que realice los siguientes cambios en el 
contenido al pulsar el botón "CAMBIAR":

-Modifica el contenido del título (tanto la etiqueta H1 como la etiqueta TITLE), 
poniéndole tu nombre.

-Cambia la imagen del segundo artículo por otra imagen cualquiera

-Oculta (sin eliminar) los artículos pares.

-Añade al inicio del titular de cada artículo el número de noticia (1- Hospitalizado...)

-Añade la clase "cabecera" al primer DIV de cada artículo y la clase "desarrollo" 
al segundo DIV de cada artículo.

-Busca en todos los artículos y reemplaza la cadena "Región" por "Región de Murcia".
No puedes modificar el archivo HTML, todo es modificado mediante Javascript.*/


let btnCambiar= document.createElement("button")
btnCambiar.id="btncambiar"
btnCambiar.textContent="CAMBIAR"
document.body.insertBefore(btnCambiar, document.footer);


let titulo= document.querySelector("title")
let h1s= document.querySelector("h1")
let noticiass= document.querySelector("#noticias")
let articuloss= noticiass.querySelectorAll("article")


let articulo2= articuloss[1];
let imagen=articulo2.querySelector('img');


let text="noticia";
let text2=".jpg"
let paresocultos= false;

let numeroArticulo=false;

let regionCambiada=false;






btnCambiar.addEventListener("click", function() 
{

    /*Cambiar titulo y h1*/ 
titulo.textContent="Pedro Gonzalez Ballesta"
h1s.textContent="Pedro Gonzalez Ballesta"


/*Cambiar img segundo articulo*/
let numeroAleatorio= Math.floor(Math.random()*6)+1;
let noticiaAleatoria=text+numeroAleatorio+text2;
imagen.src= noticiaAleatoria;




/*Ocultar los pares HE PUESTO QUE SI LE DAS SE OCULTA Y SI LE VUELVES A DAR SE MUESTRAN PARA PODER
COMPROBAR QUE LA IMAGEN DEL ARTICULO 2 CAMBIA CORRECTAMENTE*/

if (paresocultos==false)
{
    for(let i=0; i<articuloss.length; i++)
    {

            if(i%2!=0)
            {
                articuloss[i].style.display="none"
            }
            
    }
            paresocultos=true;

}   else    
        {
            for(let i=0; i<articuloss.length; i++)
                {
                    
                        if(i%2!=0)
                        {
                            articuloss[i].style.display="table-cell"
                        }
                            
                }
                paresocultos=false;
        }


/*Añade al inicio del titular de cada artículo el número de noticia (1- Hospitalizado...)*/


if (numeroArticulo==false)
{
for(let i=0; i<articuloss.length; i++)
    {

            let titular = articuloss[i].querySelector('div');
            titular.textContent = (i + 1) + " - " + titular.textContent;
            
    }
    numeroArticulo=true;
}
            

/*-Añade la clase "cabecera" al primer DIV de cada artículo y la clase "desarrollo" 
al segundo DIV de cada artículo.*/


articuloss.forEach(articulo => 
{
    let divs = articulo.querySelectorAll("div");

    divs[0].classList="cabecera"
    divs[1].classList="desarrollo"
});


/*-Busca en todos los artículos y reemplaza la cadena "Región" por "Región de Murcia".
No puedes modificar el archivo HTML, todo es modificado mediante Javascript.*/



articuloss.forEach(articulo => 
    {
        let divs = articulo.querySelectorAll("div");
    
        if (regionCambiada==false)
        {
            divs.forEach(element => 
            {
                element.textContent= element.textContent.replaceAll("Región" , "Región de Murcia")

            });
            
        }       
          
    }); regionCambiada=true;   
    /*Con este comprobador podemos comprobar si le hemos dado al btn, para no volver a hacer el replace
    tatas veces como se presione el btn*/






})