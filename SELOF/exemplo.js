//Váriaveis - servem para armazenar dados
var numero = 5;     //tipo inteiro
var nome = 'Luiz';  //tipo string
var preco = 19.90;  //tipo decimal
var ativo = true;   //tipo booleano
var idade = 25;
var querVotar = true;

alert('Olá ' + nome);
//Estrutura condicional
// > maior
// < menor
// >= maior igual
// <= menor igual
// === igual
// !== diferente
//verifica se idade for maior que 18 "E" idade menor que 65
if(idade >= 18 &&  idade <= 65) {
    alert('Pode votar! ' + nome + ' idade é: ' + idade);

} else if(idade > 65 && querVotar === true){
    alert('Pode votar!, mas não é obrigado!');
}else {
    alert('Não pode votar! vai embora!');
}
//Estruturas de repetição
var contador = 0;
console.log("teste");

while(contador <= 10){
    console.log(contador);
    contador++;
}
var num1;
function gigolo(){
    num1=document.getElementById("n1").ariaValueMax;
    console.log("UI!"+num1);
    alert('UI!'+num1);
}