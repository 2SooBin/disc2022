const imageOne = document.querySelector('.img1');
const imageTwo = document.querySelector('.img2');
const imageThree = document.querySelector('.img3');
const imageFour = document.querySelector('.img4');

function blurEffectOne(){
    document.querySelector('.img1').style.filter="blur(5px)";

}
function noneBlurOne(){
    document.querySelector('.img1').style.filter="none";
}

function blurEffectTwo(){
    document.querySelector('.img2').style.filter="blur(5px)"
}
function noneBlurTwo(){
    document.querySelector('.img2').style.filter="none"
}

function blurEffectThree(){
    document.querySelector('.img3').style.filter="blur(5px)"
}
function noneBlurThree(){
    document.querySelector('.img3').style.filter="none"
}

function blurEffectFour(){
    document.querySelector('.img4').style.filter="blur(5px)"
}
function noneBlurFour(){
    document.querySelector('.img4').style.filter="none"
}




imageOne.addEventListener('mouseover', blurEffectOne);
imageOne.addEventListener('mouseout', noneBlurOne);

imageTwo.addEventListener('mouseover', blurEffectTwo);
imageTwo.addEventListener('mouseout', noneBlurTwo);

imageThree.addEventListener('mouseover', blurEffectThree);
imageThree.addEventListener('mouseout', noneBlurThree);

imageFour.addEventListener('mouseover', blurEffectFour);
imageFour.addEventListener('mouseout', noneBlurFour);

$(document).ready(function(){

    $(".more1").click(function(){
        $(".pop-up-box1").addClass("active");
        $(".pop-up-bg").addClass("active");
    });

    $(".more2").click(function(){
        $(".pop-up-box2").addClass("active");
        $(".pop-up-bg").addClass("active");
    });
    $(".more3").click(function(){
        $(".pop-up-box3").addClass("active");
        $(".pop-up-bg").addClass("active");
    });
    $(".more4").click(function(){
        $(".pop-up-box4").addClass("active");
        $(".pop-up-bg").addClass("active");
    });

    
    $(".btn-clo").click(function(){
        $(".pop-up-box1").removeClass("active");
        $(".pop-up-box2").removeClass("active");
        $(".pop-up-box3").removeClass("active");
        $(".pop-up-box4").removeClass("active");
        $(".pop-up-bg").removeClass("active");


    });
})
