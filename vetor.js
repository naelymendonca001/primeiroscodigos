var produtos=[];
var itens = prompt("itens");
var soma =0;
for (let i=0;i<itens;i++){
    produtos [i] =parseFloat(prompt("digite um item"));
    soma += produtos[i]
}
for(let i=0;i<itens;i++){
    document.writeln(produtos [i] + "<br>");
}
alert (soma);