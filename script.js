const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexbtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click',getHex);

function getHex() {
    var hexCol = '#';

    for (let i = 0; i < 6; i++) {
        var random = Math.floor(Math.random()*hexNumber.length);
        hexCol += hexNumber[random];
        
    }

    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
    
}