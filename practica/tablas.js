function tablaDeMultiplicar() {
    for (let i=1 ; i<=10 ;i++) {
        console.log(`\ntabla de multiplicar ${i}`)
        console.log("\n---------------------------")
        for(let j = 1 ; j <=10; j++) {
            console.log(`\n ${i} * ${j} = ${i*j}`)
        }
        console.log("\n---------------------------")
    }
}

