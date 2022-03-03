var cube1= document.querySelector(".cube-1");
var cube2= document.querySelector(".cube-2");
var cube3= document.querySelector(".cube-3");
var btnNext = document.querySelector(".right-arrow");
var btnPrev = document.querySelector(".left-arrow");
var playpause = document.querySelector(".play-pause");

/*var cubes=[{cube=document.querySelectorAll('.cube')}];


Array.from(cubes).forEach(cube => {
    playpause.addEventListener('click', ()=> {
        pos += 90;
        cube.style.transform = `rotateY(${pos}deg)`;
    });
});*/

let pos =0;

//bottone destro

btnNext.addEventListener('click', ()=> {
    pos -= 90;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});
btnNext.addEventListener('mouseover', ()=> {
    pos -= 45;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});
btnNext.addEventListener('mouseout', ()=> {
    pos = 0;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});


//bottone sinistro
btnPrev.addEventListener('click', ()=> {
    pos += 90;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener('mouseover', ()=> {
    pos += 45;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener('mouseout', ()=> {
    pos = 0;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

function play(){
    pos += 90;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
}
playpause.addEventListener('click', play);
//bottone play
/*playpause.addEventListener('click', ()=> {
    pos += 90;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
    if(playpause.clicked){
        
        playpause.setAttribute('<i class="fas fa-pause"></i>')
    }
    
});
*/
/*function play() {
    var myaudio = document.getElementById("myaudio");
    var btn = document.getElementById("play");
    if (myaudio.paused) {
        myaudio.play();
        btn.textContent = "Pause";
    } else {
        myaudio.pause();
        btn.textContent = "Play";
    }

}*/
