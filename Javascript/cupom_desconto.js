function imprimirValorDoDesconto(valorDaCompra, hora, cupom){
  let valorDoDesconto;
  let valorFinal;
  if (cupom === "RANGOBARATO"){
    if (hora >= 12 && hora < 14){
      if (valorDaCompra >= 100){
        valorDoDesconto = valorDaCompra * 20/100;
      } else { valorDoDesconto = valorDaCompra * 10/100; }
      console.log (`O valor da compra é R$ ${valorDaCompra}.`);
      console.log (`O valor do desconto é R$ ${valorDoDesconto}.`);
      {valorFinal = valorDaCompra - valorDoDesconto};
      console.log (`O Valor final é R$ ${valorFinal}.`);
     } else { console.log ("Esse cupom não é valido esse horário!")}
      }
  else { console.log ("Não possui cupom válido!"); }               
  }
imprimirValorDoDesconto(100, 13, "RANGOBARATO");