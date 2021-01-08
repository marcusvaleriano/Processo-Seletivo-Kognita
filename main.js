const x = document.querySelector("#matrizA")
const y = document.querySelector("#matrizB")

const compare = function (arrayA, arrayB) {

    let contadorA = 0
    let contadorB = 0

    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] > arrayB[i]) {
            contadorA++

        }
        else if (arrayA[i] < arrayB[i]) {
            contadorB++

        }
        else if (arrayA[i] === arrayB[i]) {

        }
    }
    document.getElementById("contador").innerText = ["[" + contadorA, contadorB + "]"]
}

const getValues = element => element.value.split(',')
document.querySelector('#avaliar').addEventListener('click', () => compare(getValues(x), getValues(y)))