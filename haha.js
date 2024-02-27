var i;
var sound0 =new Audio("sounds/crash.mp3"); 
var sound1 =new Audio("sounds/kick-bass.mp3"); 
var sound2 =new Audio("sounds/snare.mp3"); 
var sound3 =new Audio("sounds/tom-1.mp3"); 
var sound4 =new Audio("sounds/tom-2.mp3"); 
var sound5 =new Audio("sounds/tom-3.mp3"); 
var sound6 =new Audio("sounds/tom-4.mp3"); 
for(i=0;i<=6;i++){
document.querySelectorAll("button")[i].addEventListener("click",hehe.bind(null,i))
}
function hehe(i){
    if (i===0){
        sound0.currentTime = 0;
        sound0.play();
        document.querySelectorAll("button")[i].classList.toggle("bla");
    }
    else if (i===1){
        sound1.currentTime = 0;
        sound1.play();
        document.querySelectorAll("button")[i].classList.toggle("bla");
    }
    else if (i===2){
        sound2.currentTime = 0;
        sound2.play();
        document.querySelectorAll("button")[i].classList.toggle("bla");
    }
    else if (i===3){
        sound3.currentTime = 0;
        sound3.play();
        document.querySelectorAll("button")[i].classList.toggle("bla");
    }
    else if (i===4){
        sound4.currentTime = 0;
        sound4.play();
        document.querySelectorAll("button")[i].classList.toggle("bla");
    }
    else if (i===5){
        sound5.currentTime = 0;
        sound5.play();
        document.querySelectorAll("button")[i].classList.toggle("bla");
    }
    else if (i===6){
        sound6.currentTime = 0;
        sound6.play();
        document.querySelectorAll("button")[i].classList.toggle("bla");
    }}

document.addEventListener("keydown", function(event){
    var key = event.key;
    if (key==='w'){sound0.currentTime = 0;
        sound0.play();
    document.querySelector(".w").classList.toggle("bla");}
    else if (key==='a'){sound1.currentTime = 0;
        sound1.play();
        document.querySelector(".a").classList.toggle("bla");}
    else if (key==='s'){sound2.currentTime = 0;
        sound2.play();
        document.querySelector(".s").classList.toggle("bla");}
    else if (key==='d'){sound3.currentTime = 0;
        sound3.play();
        document.querySelector(".d").classList.toggle("bla");}
    else if (key==='j'){sound4.currentTime = 0;
        sound4.play();
        document.querySelector(".j").classList.toggle("bla");}
    else if (key==='k'){sound5.currentTime = 0;
        sound5.play();
        document.querySelector(".k").classList.toggle("bla");}
    else if (key==='l'){sound6.currentTime = 0;
        sound6.play();
        document.querySelector(".l").classList.toggle("bla");}

})