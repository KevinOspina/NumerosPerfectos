//Realizar un código el cual permita encontrar para un número 50 número perfectos 


let valor = 2;
let array = []


function perfecto(numero)
{
    let suma= 0
    for (let index = 1; index < numero ; index++) {
        if((numero % index)==0){
            suma+= index
        }
    }


    if(suma==numero){
        return true
    }else{
        return false
    }

}

while (array.length <= 6) {
    console.log(valor,array);

    if(perfecto(valor)){
        array.push(valor)
    } 

    valor++
}

console.log(array)
