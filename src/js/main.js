const botaoAlternar = document.querySelector('#toggle');

function AlternarTema() {
  document.body.classList.toggle('dark');
}

// Carrega o DarkMode setado no cache do navegador
function carregarTema() {
  const darkMode = localStorage.getItem('dark');

  if (darkMode) {
    AlternarTema();
  }
}

carregarTema();

// Altera o DarkMode

botaoAlternar.addEventListener('change', () => {
  AlternarTema();

  document.body.classList.contains('dark')
    ? localStorage.setItem('dark', 'on')
    : localStorage.removeItem('dark');
});

function alternarConteudo(form, lista) {
  // Esconde o form
  document.getElementById(form).style.display = 'block';

  // Esconde a lista
  document.getElementById(lista).style.display = 'none';
}

// Calculadora IMC
function calcular() {
  var imc;
  var resultado = document.getElementById('resultado');
  var altura = parseInt(document.getElementById('altura').value);
  var peso = parseInt(document.getElementById('peso').value);

  document.getElementById('altura-valor').textContent = altura + ' cm';
  document.getElementById('peso-valor').textContent = peso + ' kg';

  imc = (peso / ((altura * altura) / 10000)).toFixed(2);
  resultado.textContent = imc;

  if (imc < 18.5) {
    classificacao = 'Magreza';
    resultado.style.color = '#99f6e4';
    document.querySelector('#result_calc_0').style.color = '#99f6e4';
    document.querySelector('#result_calc_1').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_2').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_3').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_4').style = 'text-gray-900 dark:text-white';
  } else if (imc <= 24.9) {
    classificacao = 'Normal';
    resultado.style.color = '#4ade80';
    document.querySelector('#result_calc_1').style.color = '#4ade80';
    document.querySelector('#result_calc_0').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_2').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_3').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_4').style = 'text-gray-900 dark:text-white';
  } else if (imc <= 29.9) {
    classificacao = 'Sobrepeso';
    resultado.style.color = '#eab308';
    document.querySelector('#result_calc_2').style.color = '#eab308';
    document.querySelector('#result_calc_1').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_3').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_4').style = 'text-gray-900 dark:text-white';
  } else if (imc < 39.9) {
    classificacao = 'Obesidade Grau II';
    resultado.style.color = '#d97706';
    document.querySelector('#result_calc_3').style.color = '#d97706';
    document.querySelector('#result_calc_1').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_2').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_4').style = 'text-gray-900 dark:text-white';
  } else {
    classificacao = 'Obesidade Grave';
    resultado.style.color = '#b45309';
    document.querySelector('#result_calc_4').style.color = '#b45309';
    document.querySelector('#result_calc_1').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_2').style = 'text-gray-900 dark:text-white';
    document.querySelector('#result_calc_3').style = 'text-gray-900 dark:text-white';
  }

  document.getElementById('classificacao').textContent = classificacao;
}

// Barra de pesquisa
document.querySelector('#entrada-pesquisa').addEventListener('input', filtroLista);

function filtroLista() {
  const entradaPesquisa = document.querySelector('#entrada-pesquisa');
  const filter = entradaPesquisa.value.toLowerCase();

  const listaItems = document.querySelectorAll('.item-lista');

  listaItems.forEach((item) => {
    let text = item.textContent;

    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// Menu responsive
function Menu(e) {
  let list = document.querySelector('#menu-mobile');
  e.name === 'menu'
    ? ((e.name = 'close'),
      list.classList.remove('top-[-1200px]'),
      list.classList.add('top-[75px]'),
      list.classList.remove('opacity-0'),
      list.classList.add('opacity-100'))
    : ((e.name = 'menu'),
      list.classList.remove('top-[75px]'),
      list.classList.add('top-[-1200px]'),
      list.classList.remove('opacity-100'),
      list.classList.add('opacity-0'));
}

// var activeLista = document.getElementById('a-lista');
// var activeCalculadora = document.getElementById('a-calculadora');

// activeLista.addEventListener('click', () => {
//   activeLista.style.color = '#e11d48';
//   activeCalculadora.style.color = '#6b7280';
// });

// activeCalculadora.addEventListener('click', () => {
//   activeCalculadora.style.color = '#e11d48';
//   activeLista.style.color = '#6b7280';
// });
