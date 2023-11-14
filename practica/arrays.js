//Acceder de manera arbitraria a diferentes elementos del array.
let electrodomesticos = ["licuadora", "televisor", "mixer", "microondas"]
console.log(electrodomesticos.indexOf("televisor"))

//Acceder de manera arbitraria a diferentes elementos del array.
let quitarPrimer = electrodomesticos.shift()
electrodomesticos.push(quitarPrimer)
console.log (electrodomesticos)

//Acceder de manera arbitraria a diferentes elementos del array.
electrodomesticos.push ("tostadora", "lavarropa")
console.log (electrodomesticos)

//mostrar cant de elementos del array
console.log(electrodomesticos.length)

//existe o no el producto
if (electrodomesticos.includes("licuadora")) {
    console.log ("producto encontrado")
} else {
    console.log("producto no encontrado")
}


//unificar una cadena de string por separado por un espacio en blanco
console.log (electrodomesticos.join(" "))

//determinar cant de elementos de la nueva cadena
let elementos = electrodomesticos.join (" ")

console.log(elementos.length)

//cambiar el nombre de un producto por otro

elementos=elementos.replace("batidora", "heladera")
console.log (elementos)

//nueva cadena separada por comas
elementos = electrodomesticos.join(", ")
console.log (elementos)


