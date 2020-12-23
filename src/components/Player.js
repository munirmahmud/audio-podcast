import { faAngleLeft, faAngleRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Player = ({songs, setCurrentSong, currentSong, audioRef,songInfo, setSongInfo, isPlaying, setIsPlaying}) => {
    
    const playSongHandler = () => {
        if(isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.pause();
        } else {
            setIsPlaying(!isPlaying)
            audioRef.current.play();
        }
    };

    const timeFormat = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value;
        
        setSongInfo({
            ...songInfo,
            currentTime: e.target.value
        });
    };

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex(song => song.id === currentSong.id);

        if(direction === 'forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'backward') {
            if((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{timeFormat(songInfo?.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo?.duration || 0 } 
                    value={songInfo?.currentTime}
                    onChange={dragHandler}
                    type="range" />
                <p>{timeFormat(songInfo?.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler("backward")} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler("forward")} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    )
}

export default Player
