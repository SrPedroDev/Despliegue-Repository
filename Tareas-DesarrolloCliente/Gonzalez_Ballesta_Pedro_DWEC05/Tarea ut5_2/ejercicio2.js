/*Completa el archivo ejercicio2.js para crear los siguientes elementos en la web:
-Un encabezado de nivel 2 con tu nombre.
-Un elemento contenedor, que contendrá los artículos de la tienda.
-Cada artículo está formado por un nombre, una descripción, un precio, 
una imagen y un pie que indique si hay stock o no del artículo. 
Estos datos los leemos del array "datos", que tenemos disponible en el archivo datos.js y ya se 
encuentra enlazado desde el HTML.
-Añade a los elementos las clases necesarias del archivo estilos.css*/

let encabezadolvl2 = document.createElement("h2")
encabezadolvl2.textContent="Pedro González Ballesta"
encabezadolvl2.classList="encabezado"
document.body.insertBefore(encabezadolvl2 , document.body.firstChild)

let contenedor = document.createElement("div")
encabezadolvl2.insertAdjacentElement("afterend", contenedor)
contenedor.classList="contenedor"

datos.forEach(articulo => 
    {
        let producto = document.createElement("div")          
        producto.classList="articulo"                   
        contenedor.appendChild(producto)

        let nombre = document.createElement("h3")
        nombre.textContent= articulo.nombre
        nombre.classList="parrafo"
        producto.appendChild(nombre)
        
        let descripcion = document.createElement("p")
        descripcion.textContent= articulo.descripcion
        descripcion.classList="parrafo"
        producto.appendChild(descripcion)

        let precio = document.createElement("p")
        precio.textContent= articulo.precio
        precio.classList= "parrafo"
        producto.appendChild(precio)


        let imagen = document.createElement("img")
        imagen.src= articulo.imagen
        imagen.alt= articulo.descripcion
        imagen.classList="imagen"
        producto.appendChild(imagen)


        let stock = document.createElement("p")
        if(articulo.stock>0)
        {
            stock.textContent= "En Stock"
            stock.style.color="green"
        }                              //De esta manera comprobamos si hay stock o no y añadimos "un pie que indique si hay stock o no del artículo"
            else
            {
                stock.textContent= "Sin existencias"
                stock.style.color="red"
            }
        
        stock.classList="parrafo"
        producto.appendChild(stock)



    });