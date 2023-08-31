alert("supermercado do torquato");
let produtos =0,preco =0,precototal = 0;
while(preco!= -1) {
    preco = parseFloat(prompt("preco R$"));
    precototal += preco;
    produtos++;
}
alert (produtos + ":" + "R$" + precototal);

 
