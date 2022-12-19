/*CASO ECOMMERCE

* TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES

* LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY

* EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:

- id –> number

- producto –> nombre del producto

- precio –> number

- fechaVencimiento (en el caso de que tenga una) —> string

- descripción –> string

- categoría (si tiene una) —> string

- oferta (booleano) –> true o false

Quiero que algunos de los elementos tengan un true en oferta.*/


// productos ofrecidos en consultorio
const productos = [
    {
        id: 10,
        producto: "osteopatia",
        precio: 3300,
        descripcion: "especializacion de la kinesiologia",
        categoría: "terapia manual",
        oferta: true,
    },
    {
        id: 04,
        producto: "kinesiologia",
        precio: 1800,
        descripcion: "rehabilitacion",
        categoría: "terapia manual",
        oferta: false,
    },
    {
        id: 03,
        producto: "depilacion definitiva",
        precio: 2500,
        descripcion: "estetica",
        categoría: "aparatologia",
        oferta: false,
    },
    {
        id: 05,
        producto: "drenaje linfativo",
        precio: 3300,
        descripcion: "masaje depletivo",
        categoría: "terapia manual",
        oferta: false,
    },
    {
        id: 02,
        producto: "masaje descontracturante",
        precio: 2200,
        descripcion: "contracturas musculares",
        categoría: "terapia manual",
        oferta: false,
    },
    {
        id: 06,
        producto: "masajes reductores",
        precio: 2200,
        descripcion: "estetica",
        categoría: "terapia manual",
        oferta: false,
    },
    {
        id: 07,
        producto: "vela velvet",
        precio: 2200,
        descripcion: "trabajo para tejido adiposo",
        categoría: "aparatologia",
        oferta: false,
    },
    {
        id: 11,
        producto: "limpieza facial",
        precio: 2200,
        descripcion: "estetica",
        categoría: "terapia manual",
        oferta: false,
    },
    {
        id: 09,
        producto: "terapia postural activa",
        precio: 3600,
        descripcion: "ejercicio postural",
        categoría: "rehabilitacion",
        oferta: false,
    },
    {
        id: 1,
        producto: "reeducacion postural global",
        precio: 3300,
        descripcion: "terapia postural",
        categoría: "terapia manual",
        oferta: false,
    },
    {
        id: 08,
        producto: "yoga",
        precio: 4100,
        descripcion: "ejercicio fisico",
        categoría: "ejercicio",
        oferta: false,
    },
    {
        id: 12,
        producto: "puncion seca",
        precio: 3300,
        descripcion: "terapia agujas",
        categoría: "terapia manual",
        oferta: true,
    },
    {
        id: 15,
        producto: "ventosas",
        precio: 3300,
        descripcion: "trabajo corporal con ventosas",
        categoría: "terapia manual",
        oferta: false,
    },
    {
        id: 14,
        producto: "rehabilitacion atm",
        precio: 3300,
        descripcion: "problemas en boca",
        categoría: "terapia manual",
        oferta: false,
    },
    {
        id: 13,
        producto: "tratamiento paralisis facial",
        precio: 2200,
        descripcion: "problema neruologico",
        categoría: "terapia manual",
        oferta: false,
    }
]
console.log(productos[5].producto)


//2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).


//VERIFICACION DE OFERTA
function verificaroferta (){
for (let i=0; i <productos.length; i++){
if (productos[i].oferta === true){
    console.log(`la terapia : ${ productos[i].producto} tiene un 10% de descuento hasta 2023. El valor de la sesion es: ${productos[i].precio * 0.90}`)
}
}}
verificaroferta ()



/*3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. 
También pueden ordenar por número de id (ascendente o descendente).
Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos:
- […array] —> spread operator
- array.slice() —> copia segura en otra variable
- [].concat(array) —> copia segura en otra variable*/


// ORDENAMIENTO DE ELEMENTOS
const newproductos = productos.slice()
console.log(newproductos)
console.log(productos)

// utilizamos metodo sort para acomodar por id de forma ascendente
const ascendente = [...newproductos].sort((a,b) =>{
    return a.id - b.id;})
console.log( ascendente)

// utilizamos metodo sort para acomodar por producto para ordenarlo alfabeticamente
const alfabetico =[...newproductos].sort((a,b) =>{
    if(a.producto < b.producto){
        return -1
    } else if (a.producto > b.producto){
        return 1
    } else {
        return 0
    }
})
console.log (alfabetico)

/*4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, 
filtre el array y que muestre en consola cada una de las ofertas.*/

//VISUALIZAR OFERTAS DE LA TIENDA
console.log (confirm("quiere ver las ofertas de la tienda?"));{
    const filtrar = newproductos.filter((tera) =>{
        return tera.oferta === true
    })
console.log(filtrar)

}

/*5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().*/

// BUSCADOR DE PRODUCTOS
const buscar = prompt(`que terapia esta buscando?
 Osteopatía 
 Kinesiología  
 Depilación definitiva 
 Drenaje linfático 
  Masaje descontracturantes  
  Masajes reductores  
  Vela velvet  
  Limpieza facial  
  Terapia postural activa  
  Reeducación postural global 
  Yoga  
  Punción seca  
  Ventosas  
  Rehabilitación ATM  
  Tto Parálisis facial`)
console.log(buscar)

function productobuscado(){
let productobuscado = newproductos.find( terapia => terapia.producto === buscar);
alert(productobuscado.producto);
alert(productobuscado.producto + productobuscado.id + productobuscado.descripcion + productobuscado.categoría + productobuscado.precio);

}
productobuscado()
    
    
    
