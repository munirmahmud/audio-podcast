export const playAudio = (isPlaying, audioRef) => {
    if(isPlaying) {
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined) {
            playPromise.then(audio => {
                audioRef.current.play();
            });
        }
    }  
};

export const timeFormat = (time) => {
    return(
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
};