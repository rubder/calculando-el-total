

var valortotal = 0;
var cantidad = 0;
var precioinicial = 500000;


function sumar (){
    valortotal += precioinicial;
    cantidad += 1;
    document.querySelector("#valortotal").innerHTML= valortotal;
    document.querySelector("#cantidad").innerHTML= cantidad;

}

function restar (){
    if(valortotal - precioinicial >= 0){
        valortotal-=precioinicial;
        cantidad -= 1;
    }


    document.querySelector("#valortotal").innerHTML= valortotal;
    document.querySelector("#cantidad").innerHTML= cantidad;

}