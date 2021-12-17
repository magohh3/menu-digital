var time = new Date();

var hora = time.getHours();

 console.log(hora);

if(time > 1 && time < 5){
  console.log('Mostrar');
}

if (hora >= 13 && hora <=17){
  console.log('Mostrar');
}else{
  console.log('No mostrar');
}