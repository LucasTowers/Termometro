const container = document.querySelector('.container');
const pesquisa = document.querySelector('.caixa-pesquisa button');
const caixaClima = document.querySelector('.caixa-clima');
const climaDetalhes = document.querySelector('.clima-detalhes');
const error404 = document.querySelector('.nao-encontrado');

search.addEventListener('click', () = > {

    const APIKey = '728b0ee6df5687559812bd3169ad77b7';
    const cidade = document.querySelector('.caixa-pesquisa input').value;

    if (cidade === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json=>{

            if (json.cod === '404') {
                container.style.height = '400px';
                caixaClima.style.display = 'none';
                climaDetalhes.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
            
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const imagem = document.querySelector('.caixa-clima img');
            const temperatura = document.querySelector('.caixa-clima .temperatura');
            const descricao = document.querySelector('.caixa-clima .descricao');
            const umidade = document.querySelector('.clima-detalhes .umidade span');
            const vento = document.querySelector('.clima-detalhes .vento span');

            switch (json.clima[0].main) {
                case 'Limpo':
                    image.src = 'img/sun-color-icon';
                    break;

                case 'Chuva':
                    image.src = 'images/rain.png';
                    break;

                case 'Neve':
                    image.src = 'images/snow.png';
                    break;

                case 'Nublado':
                    image.src = 'images/cloud.png';
                    break;

                case 'Ventania':
                    image.src = 'images/mist.png';
                    break;

                default:
                    



     });

});