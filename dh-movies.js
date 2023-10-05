let movies = ["Turno de día", "30 dias con mi ex", "Bestia", "El monte", "top gun maverick", "Elvis", "Thor: amor y trueno"]

function mayus (nombrepeli) { 
    return nombrepeli.toUpperCase()
}
let nuevonombre = mayus(movies[6])
console.log(nuevonombre)

movies.pop()
movies.unshift(peli)

console.log(movies)

let peliculasEstreno = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"]
let nuevacartelera = peliculasEstreno.split(" ")
console.log(nuevacartelera)

function fusionCarteleras (arreglo1, arreglo2) {
    return arreglo1.concat(arreglo2)
}
console.log (fusionCarteleras(peli,nuevacartelera))
