
// add a button and user input
const userClick = document.getElementById('user-click');
const userInput = document.getElementById('user-input');
const userElement = document.getElementById('user-element');

userClick.addEventListener('click', () => {
    userElement.style.color = 'yellow';
    userElement.style.background = 'black';
    userElement.textContent = userInput.value;
});