console.log("welcome")
let songindex=0;
let audioelement=new Audio('1.mp3')
let masterplay=document.getElementById('masterplay')
let myprogressbar=document.getElementById('myprogressbar')
let gif=document.getElementById('gif')
let mastersongname=document.getElementById('mastersongname')
let songinfo=document.getElementsByClassName('songinfo')
// let littleplay=document.getElementsByClassName('littleplay');



let songs=[
    {songname:"1",filepath:"1.",coverpath:"1.jpg"},
    {songname:"2",filepath:"",coverpath:"2.jpg"},
    {songname:"3",filepath:"",coverpath:"3.jpg"},
    {songname:"4",filepath:"",coverpath:"4.jpg"},
    {songname:"5",filepath:"",coverpath:"5.jpg"},
    {songname:"6",filepath:"",coverpath:"6.jpg"},
    {songname:"7",filepath:"",coverpath:"7.jpg"},
    {songname:"8",filepath:"",coverpath:"8.jpg"}
]

masterplay.addEventListener('click',()=>{
    if(audioelement.paused|| audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        //self
        gif.src=songs[songindex].coverpath
        //self
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play')  
        //self
        gif.src=songs[songindex].coverpath 
        //self
        gif.style.opacity=0;
    }
})

// songitemplay.addEventListener('click',()=>{
//     if(audioelement.played|| audioelement.currentTime>0){
//         audioelement.pause();
//         littleplay.classList.remove('fa-pause')
//         littleplay.classList.add('fa-play');   
//     }
// })


audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    // console.log(progress)
    myprogressbar.value=progress;
})


myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myprogressbar.value*audioelement.duration/100)
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach(element => {
        element.classList.remove('fa-pause')
        element.classList.add('fa-play');
    });
    
}

// littleplay.addEventListener('click',()=>{
//     if(audioelement.paused||audioelement.currentTime){
//         audioelement.play();
//         element.classList.remove('fa-play')
//         element.classList.add('fa-pause');
//     }
//     else{
//         audioelement.pause();
//         element.classList.remove('fa-pause')
//         element.classList.add('fa-play');
//     }
// })


Array.from(document.getElementsByClassName('songitemplay')).forEach(element => {
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audioelement.src=`${songindex+1}.mp3`
        mastersongname.innerText=songs[songindex].songname
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')

    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=7){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioelement.src=`${songindex+1}.mp3`
    songinfo.src=`${songinfo+1}.jpg`
    mastersongname.innerText=songs[songindex].songname
    //self
    gif.src=songs[songindex].coverpath
    //self
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioelement.src=`${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname
    //sefl
    gif.src=songs[songindex].coverpath
    //self
    songinfo.src=`${songinfo+1}.jpg`
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')
})