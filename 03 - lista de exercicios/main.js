//const nota1 = 7;
//const nota2 = 7;
//const nota3 = 7;
//const media = (nota1 + nota2 + nota3) / 3;

//if (media < 5) {
  //  console.log('Reprovação');
//} else if (media <=5 && media <=7) {
  //  console.log('Recuperação');
//} else {
   //console.log('Passou de Semestre');
//}

//const peso = 110;
//const altura = 1.80;
//const imc = peso / Math.pow(altura, 2)
//console.log(imc.toFixed(2));

//if (imc < 18.5) {
  //  console.log('Abaixo do peso');
//} else if (imc >= 18.5 && imc < 25) {
  //  console.log('Peso normal');
//} else if (imc >=25 && imc < 30) {
  //  console.log('Acima do Peso');
//} else if (imc >=30 && imc < 40) {
  //  console.log('Obeso');
//} else {
  //  console.log('Obesidade Grave');
//}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log('R$', precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log('R$', precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log('R$', precoEtiqueta);
} else {
    console.log('R$', precoEtiqueta + (precoEtiqueta * 0.1))
}