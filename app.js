// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openBttn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBttn = document.querySelector('.close-btn');

openBttn.addEventListener('click', function(){
    overlay.classList.add('open-modal');
});

closeBttn.addEventListener('click', function(){
    overlay.classList.remove('open-modal');
});