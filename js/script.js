let randomNumber = Math.floor(Math.random(0) * 1000);
let previousGuess = document.querySelector('.previous-guess');
let results = document.querySelector('.results');
let submitButton = document.querySelector('.btn');
let restartPlacement = document.querySelector('.restart');
let restartButton = document.createElement("button");
let counterPlacement = document.querySelector('.counter');
let counter = 0;

function guess() {
    let input = document.querySelector('input').value;
    localStorage.setItem('num', input);
    if(input > randomNumber) {
        counter++;
        counterPlacement.innerHTML = `Counter: ${counter}`
        let inputStorage = localStorage.getItem('num');
        results.setAttribute("id", "too-high");
        results.textContent = "↑ Too high of a guess ↑";
        previous(inputStorage);
    } 
    if(input < randomNumber) {
        counter++;
        counterPlacement.innerHTML = `Counter: ${counter}`;
        let inputStorage = localStorage.getItem('num');
        results.setAttribute("id", "too-low");
        results.textContent = "↓ Too low of a guess ↓";
        previous(inputStorage);
    } 
    if(counter == 10) {
        results.setAttribute("id", "loser");
        results.textContent = "You Lose!";
        submitButton.disabled = true;
        var audio = new Audio('./audio/Price-is-right-losing-horn.mp3');
        audio.play();
        restart();
    }
    if(input == randomNumber) {
        let inputStorage = localStorage.getItem('num');
        results.setAttribute("id", "winner");
        results.textContent = "Winner";
        previous(inputStorage);
        submitButton.disabled = true;
        var audio = new Audio('./audio/Ta Da-SoundBible.com-1884170640.mp3');
        audio.play();
        restart();
    }
}
function previous(input) {
    document.querySelector('.the-guess').innerHTML += "<li>" + input + "," + "</li>"; 
}
function restart() {
    restartPlacement.append(restartButton);
    restartButton.appendChild(document.createTextNode('Restart'));
    restartButton.addEventListener("click", function() {
        location.reload();
    })
}
submitButton.onclick = function() {
    guess();
}
