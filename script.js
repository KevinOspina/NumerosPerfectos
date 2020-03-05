
//Realizar un código el cual permita encontrar para un número 50 número perfectos 

let valor = 0;
let n_perfectos = [] //Array para almacenar los números perfectos

function perfecto_recursivo(valor, i, suma) {

    if (valor <= i) {
        return suma
    } else {
        if ((valor % i) == 0) suma += i

        return perfecto_recursivo(valor, i + 1, suma)
    }

}



function perfecto(numero) {
    let suma = 0
    for (let index = 1; index < numero; index++) {
        if ((numero % index) == 0) suma += index
    }

    if (suma == numero) return true
    return false

}

while (n_perfectos.length <= 10) {
    console.log(valor, n_perfectos);
    let val = Number()
    let suma = perfecto_recursivo(valor, 1,  val) 
    if (suma==valor) n_perfectos.push(valor)

    valor++
}

console.log(n_perfectos)
