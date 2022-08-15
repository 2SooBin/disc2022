const imageOne = document.querySelector('.one');
const imageTwo = document.querySelector('.two');
const imageThree = document.querySelector('.three');
const imageFour = document.querySelector('.four');

function blurEffectOne(){
    document.querySelector('.one').style.filter="blur(5px)";
}
function noneBlurOne(){
    document.querySelector('.one').style.filter="none"
}

function blurEffectTwo(){
    document.querySelector('.two').style.filter="blur(5px)"
}
function noneBlurTwo(){
    document.querySelector('.two').style.filter="none"
}

function blurEffectThree(){
    document.querySelector('.three').style.filter="blur(5px)"
}
function noneBlurThree(){
    document.querySelector('.three').style.filter="none"
}

function blurEffectFour(){
    document.querySelector('.four').style.filter="blur(5px)"
}
function noneBlurFour(){
    document.querySelector('.four').style.filter="none"
}




imageOne.addEventListener('mouseover', blurEffectOne);
imageOne.addEventListener('mouseout', noneBlurOne);

imageTwo.addEventListener('mouseover', blurEffectTwo);
imageTwo.addEventListener('mouseout', noneBlurTwo);

imageThree.addEventListener('mouseover', blurEffectThree);
imageThree.addEventListener('mouseout', noneBlurThree);

imageFour.addEventListener('mouseover', blurEffectFour);
imageFour.addEventListener('mouseout', noneBlurFour);
