var menu = document.querySelector('#armando');
var itens_menu = document.querySelector('.opcoes')
menu.addEventListener('click', function(){
    alert('Parabéns! Você ganhou um  milhão de kwanzas angolanos!')
    itens_menu.classList.toggle('mostrar_menu');
});