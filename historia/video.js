/* REPRODUCTOR */ 

let botonInicio = document.querySelector('#play');

let botonStop = document.querySelector('#pause');

let video = document.querySelector('video');

botonInicio.addEventListener('click', ()=>{
    video.play()
});

botonStop.addEventListener('click', ()=>{
    video.pause()
});
