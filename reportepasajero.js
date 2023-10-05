/*Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que avanzó 
el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. 
La empresa nos provee los siguientes datos:

El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.*/


function reporteDePasajeros(estaciones)
{
let arregloTotal= [];
let pasajeros=0;


for(let i=0; i<=estaciones ; i++){

if(i==0){
    pasajeros+=200
}
else if (i==5)
{

    pasajeros+=40;
}
else{
    pasajeros+=20;
}

arregloTotal.push("En la estacion "+ i+ " hay "+ pasajeros+" pasajeros arriba del tren")

}

return arregloTotal

}
console.log(reporteDePasajeros(5));






