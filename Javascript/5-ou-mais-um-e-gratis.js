function solucao(precos) {
let menorValor = precos[0];
let totalCompra = 0;
let desconto;
for (let i of precos) {
    if (precos.length < 5) {
    totalCompra = totalCompra + i;
        } else { desconto = true;totalCompra = totalCompra + i;
if (i < menorValor) {
    menorValor = i; }
}
}
if (desconto === true) {totalCompra = totalCompra - menorValor;}

console.log(totalCompra);
}