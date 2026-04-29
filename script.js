// EJERCICIO 1

// Hacer un programa que:

// Solicite al usuario el ingreso por teclado de 3 notas
// Saque la media de las notas
// Muestre por pantalla
// Si la nota es menor que 5 'SUSPENSO'
// Si la nota es mayor o igual 5 y menor que 7 'APROBADO'
// Si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'

function notaFinal(nota) {
    if (nota < 5) {
        console.log("suspenso")
    } else if (nota < 7) {
        console.log("Aprobado")
    } else if (nota <= 10) {
        console.log("sobresaliente");
    }
    else {
        return console.log("nota erronea");
    }

}

notaFinal(8)

// EJERCICIO 2

// Hacer un programa que:

// Ingreso de un numero por teclado
// Muestre por pantalla si ese numero es de 1 cifra 2 cifras o 3 cifras

function numeroCifras(numero) {
    if (numero < 10) {
        console.log("el numero tiene una cifra")
    } else if (numero < 100) {
        console.log("el numero tiene dos cifras")
    } else if (numero < 1000) {
        console.log("el numero tiene tres cifras")
    } else {
        console.log("el numero tiene mas de tres cifras")
    }

}

numeroCifras(1000)


// EJERCICIO 3

// Solicite al usuario que escriba un color. Si ese color existe que lo traduzca al inglés, sino que muestre un mensaje de error




// EJERCICIO 4

// Se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:

// Cuantos son positivos
// Cuantos son negativos
// Cuantos son pares

const numeros = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
function contarNumeros(numeros) {
    let positivos = 0;
    let negativos = 0;
    let pares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
        } else if (numeros[i] < 0) {
            negativos++;
        }
        if (numeros[i] % 2 === 0) {
            pares++;
        }
    }
    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Pares: " + pares);
}

contarNumeros(numeros);
// EJERCICIO 5
// Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
// Almacenar todos los números en un array
// Almacenar en otro array los números comprendidos entre el 1 y 250
// // Almacenar en otro array los números comprendidos entre el 251 y 500

const numeros2 = [1, 50, 100, 150, 200, 250, 300, 350, 400, 450];
function separarNumeros(numeros2) {
    const entre1y250 = [];
    const entre251y500 = [];

    for (let i = 0; i < numeros2.length; i++) {
        if (numeros2[i] >= 1 && numeros2[i] <= 250) {
            entre1y250.push(numeros2[i]);
        } else if (numeros2[i] >= 251 && numeros2[i] <= 500) {
            entre251y500.push(numeros2[i]);
        }
    }
    console.log("Números entre 1 y 250:", entre1y250);
    console.log("Números entre 251 y 500:", entre251y500);
}
separarNumeros(numeros2);