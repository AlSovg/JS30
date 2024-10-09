const video = document.querySelector('.player__video');

function togglePlay(button){
    if(video.paused){
        video.play();
        button.innerHTML = '&#10074;&#10074;';
    }else{
        video.pause();
        button.innerHTML = '&#9658;';
    }

}

function togglePlayRate(input){
    video.playbackRate = input.value;
}

function toggleTime(button){
    let currentTime = parseInt(video.currentTime);
    let toggleTime = currentTime + parseInt(button.getAttribute('data-skip'));
    if(toggleTime > 0)
        video.currentTime =  toggleTime
    else
        video.currentTime = 0
}
function toggleVolume(input){
    video.volume = input.value;
}