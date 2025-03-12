console.log("welcome to spotify")

let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');




let songs=[
    { songName:"salam-e-ishq", filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    { songName:"salam-e-ishq", filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    { songName:"salam-e-ishq", filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currenttime<=0){
        audioElement.play()
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }

})
audioElement.addEventListener('timeupdate',()=>{
   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value=progress; 

}
)
myprogressbar.addEventListener('change',()=>
{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
