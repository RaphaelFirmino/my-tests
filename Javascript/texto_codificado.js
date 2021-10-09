function solucao(textoCodificado){
  const dicionario = {
    "###":"C",
    "##@":"U",
    "#@#":"B",
    "@##":"D",
    "@#@":"E",
    "#@@":"A",
    "@@@":"Y",
    "@@#":"M",
  };
  let resposta = "";
  for (i = 0; i < textoCodificado.length; i+=3){
    const pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
    resposta += dicionario[pedaco];
    console.log (resposta);}

  //let resposta = "";
  //for (i = 0; i < textoCodificado.length; i+=3){
    //const pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
    //if (pedaco === "###"){resposta += "C";}
    //else if (pedaco === "##@"){resposta += "U";}
    //else if (pedaco === "#@#"){resposta += "B";}
    //else if (pedaco === "@##"){resposta += "D";}
    //else if (pedaco === "@#@"){resposta += "E";}
    //else if (pedaco === "#@@"){resposta += "A";}
    //else if (pedaco === "@@@"){resposta += "Y";}
    //else {resposta += "M";}
  //console.log (resposta);}
}
solucao("#@@####@@@##@#@@@#@@@");