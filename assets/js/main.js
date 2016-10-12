sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
    $(".slideMap > .slideItem.1").fadeIn(300);
    startSlider();
});

function startSlider(){
    count= $(".slideMap > .slideItem").size();
    loop = setInterval(function(){
        if(sliderNext > count){
            sliderNext = 1;
            sliderInt = 1;
        }
        $(".slideMap > .slideItem").fadeOut(300);
        $(".slideMap > .slideItem." + sliderNext).fadeIn(300);
        sliderInt = sliderNext;
        sliderNext = sliderNext +1;
        
    },3000);
}

function prev(){
    newSlide = sliderInt - 1;
    showSlide(newSlide);
}
function next(){
    newSlide = sliderInt + 1;
    showSlide(newSlide);
}

function stopLoop(){
    window.clearInterval(loop)
}

function showSlide(Id){
    stopLoop();
    if(Id > count){
        Id = 1;
    }else if (Id < 1){
        Id=count;
    }
    $(".slideMap > .slideItem").fadeOut(300);
    $(".slideMap > .slideItem." + Id).fadeIn(300);
    sliderInt = Id;
    sliderNext = Id +1;
    startSlider();
}
// stop slider when hover 
$(".slideMap > .slideItem").hover(
    function(){
        stopLoop();
    },
    function(){
        startSlider();
    }
);