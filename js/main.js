const block = document.querySelector('.js-block'),
    color = document.querySelector('.js-color'),
    btn = document.querySelector('.js-btn'),
    hex = '0123456789ABCDEF';


 let randomColor = '#';

const getRandomColor = () => {
     randomColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = hex[Math.floor(Math.random() * hex.length)];
        randomColor += randomIndex;
        console.log(randomColor);
    }

}

btn.addEventListener('click', () => {
    getRandomColor();
    color.innerHTML = randomColor;
    block.style.backgroundColor = randomColor;
});