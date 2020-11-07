const cartButton = document.querySelector('#cart-button'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close');

cartButton.addEventListener('click', toggleModal)

close.addEventListener('click', toggleModal);

function toggleModal(e) {
    modal.classList.toggle('is-open');
}

console.log('a');