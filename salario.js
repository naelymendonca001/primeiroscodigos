var salario=0;
var salarioBase=parseFloat(prompt("salario"));
var horaSemanal=parseFloat(prompt("horas semanais"));
var hora=salarioBase/160;
var horaExtra= hora*1.5;
if(horaSemanal >=40){
    salario=salarioBase + (horaExtra *(horaSemanal - 40));
    alert (salario);
}
else {
    salario=salarioBase - (horaSemanal * hors);
    alert(salario); // alert ("R$" + salario.tofxed(2));
}

