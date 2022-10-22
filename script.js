const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

function switching(button, add, remove) {
    button.addEventListener('click', () => {
        add.classList.add('hidden');
        remove.classList.remove('hidden');
    });
}

switching(submitButton, mainContainer, thanksContainer);
switching(rateAgain, thanksContainer, mainContainer);

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    });
});