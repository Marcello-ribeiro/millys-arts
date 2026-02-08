const botao = document.getElementById('abrir-menu');
const menu = document.getElementById('menu-lateral');

botao.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});