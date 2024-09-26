// Iteration 1: Names and Input
const hacker1 = "Alejandra"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Rocío"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//  3.1 Imprimir los caracteres del nombre del conductor, separados por espacio y en mayúsculas , es decir, "J O H N".

const editHacker1 = hacker1.toUpperCase().split('').join(' ')
console.log(editHacker1)

// 3.2 Imprimir todos los caracteres del nombre del navegador en orden inverso, es decir, "nhoJ".
const reverseHacker2 = hacker2.split('').reverse().join('')
console.log(reverseHacker2)

// 3.3 Dependiendo del orden lexicográfico de las cadenas, imprimir:
The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?