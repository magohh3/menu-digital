var time = new Date();

var hora = time.getHours();
var dia = time.getDate();

 console.log(hora);
 console.log(dia);


if(time > 1 && time < 5){
  console.log('Mostrar');
}

if (hora >= 13 && hora <=17){
  console.log('Mostrar');
}else{
  console.log('No mostrar');
}

switch (dia){
  case 17 :
  hide(document.getElementById('not-show'));
  break;
  case 18 :
  console.log('Menu4');
  break
  default :
  console.log('Sin menu');
}