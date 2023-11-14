let operacionesBancarias = [100, -200, 500, -100, 700]

let Callback = (operacionesBancarias) => {
    let depositos = 0
    let retiros = 0

    for (let i=0; i < operacionesBancarias.lenght; i++) {
        if (operacionesBancarias[i] > 0) {
            depositos += operacionesBancarias[i]
        }else {
            retiros += operacionesBancarias[i]
        }
const saldoActual = depositos+retiros
return{saldoActual, depositos, retiros}
    }
}
console.log(Callback(operacionesBancarias))


let nombre = "leandro"
let apellido = "cortez"
let reconocerU = (nombre, apellido) => {
    const saldos = Callback(operacionesBancarias)

    const mensaje = `
    Estimada/o" + nombre + " " + apellido
    El monto total de los depósitos es de: " + $${saldos.depositos}
    El monto total de los retiros es de: " + $${-saldos.retiros}
    Por lo tanto, su saldo actual en la cuenta es de: "  $${saldos.saldoActual}
`
    return mensaje
}
const resumen = reconocerU(nombre, apellido, operacionesBancarias)

console.log(resumen)