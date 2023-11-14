let HCARNE = 1800;
let HPOLLO = 1500;
let HVEGGY = 1200;
let PRECIO_JAMON = 30;
let PRECIO_QUESO = 25;
let PRECIO_SALSA = 5;
let PRECIO_MAYONESA = 5;
let PRECIO_MOSTAZA = 5;
let PRECIO_TOMATE = 15;
let PRECIO_LECHUGA = 10;
let PRECIO_CEBOLLA = 10;




let McPedido = (nombre,apellido,hamburguesa,
                  jamon,queso,salsa,mostaza,
                  tomate,lechuga,cebolla,mcCheck)=>{

    let total = 0;
    let base = 0;
    let opcion = hamburguesa.trim().toLowerCase();
    switch(opcion){
        case "carne a la parrilla":
            base = HCARNE;
            break;
        case "pollo":    
            base = HPOLLO;
        break;
        case "vegetariana":    
           base = HVEGGY;
        break;
        default:
            return console.log("Error, opcion no valida");
        }

    
    if(jamon) total += PRECIO_JAMON;
    if(queso) total += PRECIO_QUESO;
    if(salsa) total += PRECIO_SALSA;
    if(mostaza) total += PRECIO_MOSTAZA;
    if(tomate) total += PRECIO_TOMATE;
    if(lechuga) total += PRECIO_LECHUGA;
    if(cebolla) total += PRECIO_CEBOLLA;

    total  += base ;

    return mcCheck(nombre,apellido,total);
}

let jamon   = true;
let queso   = true;
let salsa   = false;
let mostaza = false;
let tomate = false;
let lechuga = false;    
let cebolla = false;

let mcCallback = function (nombre,apellido,total){
    return console.log(`Estimado ${nombre} ${apellido}, el monto total a pagar es ${total}`);
}


let miPedido = McPedido("leandro",
                        "cortez",
                        "pollo"
                        , jamon   
                        , queso   
                        , salsa   
                        , mostaza 
                        , tomate 
                        , lechuga 
                        , cebolla 
                        ,mcCallback
                    )