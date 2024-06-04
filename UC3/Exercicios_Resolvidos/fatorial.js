function fatorial(valor){
for (i = valor - 1; i > 0; i--) {
    valor = valor * i
}
console.log(valor)
}
fatorial(3)