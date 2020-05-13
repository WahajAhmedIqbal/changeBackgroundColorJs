const colorBtn = document.querySelector('.colorBtn');
const body = document.querySelector('body');

const bgcolors = ['black' , 'green' ,'pink' , 'blue' , 'gray','purple','white','orange','red' ];

colorBtn.addEventListener('click',changeColor);

function changeColor() {
    // body.style.backgroundColor = bgcolors;
    var random = Math.floor(Math.random()*bgcolors.length)
    body.style.backgroundColor = bgcolors[random];
}