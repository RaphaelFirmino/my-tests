function solucao(produtos) {
let total = 0;
let totalTop = 0;
for (let i of produtos) {
    total = total + i.preco;
    
    if (i.preco > 10000)
        totalTop = totalTop + i.preco; 
} 
const percentual = totalTop / total;
const resultado = { totalTop, percentual};
console.log(resultado);
}