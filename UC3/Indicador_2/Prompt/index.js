const prompt = require("prompt-sync")();

let a = Number(prompt("Digite a primeira nota: "))
let b = Number(prompt("Digite a segunda nota: "))
let c = Number(prompt("Digite a terceira nota: "))
let d = Number(prompt("Digite a quarta nota: "))
let valor = (a + b + c + d) / 4
console.log(valor)