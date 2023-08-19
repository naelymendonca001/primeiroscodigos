var trigonometria= prompt("escolha\n1.seno\n2.coseno\n3.tangente");
var angulo= prompt("digite o angulo");
switch(trigonometria){
    case '1':
        alert (Math.sin((angulo * Math.PI)/180));break;
        case '2':
            alert(Math.cos((angulo * Math.PI)/180));break;
            case '3':
                alert (Math.tan((angulo * Math.PI)/180));break;
                default:
                    alert ("opcao invalida")
}