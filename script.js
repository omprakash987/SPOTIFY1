console.log('hello world'); 


let songIndex =0; 
let audioElement = new Audio('2.mp3'); 
let masterPlay = document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar'); 

let masterSongName = document.getElementById('masterSongName'); 


let gif = document.getElementById('gif'); 

let songItems = Array.from(document.getElementsByClassName('songItem')); 


let songs = [
    
    {songName: "Jatt da muqaabla", filePath:"1.mp3",coverPath: "song_cover.jpg"},
    

    {songName: "Anajan velly te - Animal", filePath:"2.mp3",coverPath: "song_cover.jpg"},

    {songName: "Pachtaoge", filePath:"3.mp3",coverPath:"song_cover.jpg"},
    {songName: "Heriyee", filePath:"4.mp3",coverPath: "song_cover.jpg"},
    {songName: "iBlue eyes - Yo Yo honey singh", filePath:"5.mp3",coverPath: "song_cover.jpg"},
    {songName: "Brown munde - Ap dillon", filePath:"6.mp3",coverPath: "song_cover.jpg"},
    {songName: "Klaastar - -Yo Yo honey singh", filePath:"7.mp3",coverPath: "song_cover.jpg"},
    {songName: "Dope Shope- -Yo Yo honey singh", filePath:"8.mp3",coverPath: "song_cover.jpg"},
    {songName: "Love Dose - Yo Yo honey singh", filePath:"9.mp3",coverPath: "song_cover.jpg"},
    {songName: "So High", filePath:"10.mp3",coverPath: "song_cover.jpg"},
    
] 

songItems.forEach((element,i) => {
   

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;

    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});








masterPlay.addEventListener('click',()=>{
if(audioElement.paused  || audioElement.currentTime<=0){
    

    audioElement.play();

    // masterPlay.classList.remove('fa-solid fa-play'); 

    // masterPlay.classList.add('fa-solid fa-pause');
}

else{
    audioElement.pause(); 
    // masterPlay.classList.remove('fa-solid fa-pause'); 

    // masterPlay.classList.add('fa-solid fa-play'); 

   gif.style.opacity = 0; 



}

// if(audioElement.play || audioElement.currentTime>=0){
//     audioElement.pause(); 

// }
})


audioElement.addEventListener('timeupdate',()=>{
    

    // update seeekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
   

    myProgressBar.value = progress; 
  
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100; 
} )


const makeAllPlay=()=>{
   
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

//     element.target.classList.remove('fa-solid fa-pause')

// element.classList.add('fa-solid fa-play');

})
    
}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
     
    makeAllPlay(); 



    songIndex = parseInt(e.target.id); 

    // e.target.classList.remove('fa-solid fa-play'); 
    // e.target.classList.add('fa-solid fa-pause'); 
     

    
    audioElement.src = `${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex.songName];
    audioElement.currentTime = 0; 
    audioElement.play();




    // if(audioElement.played  || audioElement.currentTime>=0){

    //     audioElement.pause(); 
    //     gif.style.opacity = 0; 
    
    // }
   
 




     gif.style.opacity=1; 
     

   
    

    // masterPlay.classList.remove('fa-solid fa-play');
    // masterPlay.classList.remove('fa-solid fa-pause');

})

element.addEventListener('dblclick',(e)=>{
audioElement.pause(); 
gif.style.opacity=0; 

myProgressBar.value = progress; 

})

})



// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//             audioElement.pause(); 
//             gif.style.opacity = 0; 
//     })
// })


document.getElementById('next').addEventListener(
    'click',()=>{
        if(songIndex>=9){
            songIndex =0
        }
        else{
            songIndex+= 1; 

        }

       
        audioElement.src=`${songIndex+1}.mp3`; 
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0; 
        audioElement.play(); 
        gif.style.opacity = 1; 

        // masterPlay.classList.remove('fa-solid fa-play'); 

        // masterPlay.classList.add('fa-solid fa-pause');


    }
)



document.getElementById('previous').addEventListener(
    'click',()=>{
        if(songIndex<=0){
            songIndex =9;
        }
        else{
            songIndex-= 1; 

        }


   
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName; 
        console.log(masterSongName); 
        audioElement.currentTime = 0; 
        audioElement.play();
        gif.style.opacity=1; 



        // masterPlay.classList.remove('fa-solid fa-play'); 

        // masterPlay.classList.add('fa-solid fa-pause');
         

    })

