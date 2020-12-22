import { faAngleLeft, faAngleRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null);
    
    const playSongHandler = () => {
        if(isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.pause();
        } else {
            setIsPlaying(!isPlaying)
            audioRef.current.play();
        }
    };

    const timeUpdateHandler = e => {
        const currentTime = e.target.currentTime,
            duration = e.target.duration;

        setSongInfo({
            ...songInfo,
            currentTime,
            duration
        });
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

    const [songInfo, setSongInfo] = useState({
        currentTime: "0",
        duration: 0
    });

    return (
        <div className="player">
            <div className="time-control">
                <p>{timeFormat(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration || "" } 
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range" />
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>

            <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
                />
        </div>
    )
}

export default Player
