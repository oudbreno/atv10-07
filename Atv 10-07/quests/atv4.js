
let salarioMin = parseFloat(1293.20)
let salarioUser = parseFloat(prompt("Me fale seu salario: "))
let quant = salarioUser/salarioMin
let numArredondado = Math.round(quant);

alert("A quantidade de salarios minimos que tem no seu salario é " + numArredondado)