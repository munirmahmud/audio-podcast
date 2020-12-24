import { faAngleLeft, faAngleRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { timeFormat } from '../helpers';

const Player = ({songs, setSong, setCurrentSong, currentSong, audioRef,songInfo, setSongInfo, isPlaying, setIsPlaying}) => {
    const activeLibraryHandler = (netPrev) => {
        const activeSong = songs.map(song => {
            if(song.id === netPrev.id) {
                return {...song, active: true}
            } else {
                return {...song, active: false}
            }
        });
        setSong(activeSong);
    };
    
    const playSongHandler = () => {
        if(isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.pause();
        } else {
            setIsPlaying(!isPlaying)
            audioRef.current.play();
        }
    };

    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value;
        
        setSongInfo({
            ...songInfo,
            currentTime: e.target.value
        });
    };

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex(song => song.id === currentSong.id);

        if(direction === 'forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'backward') {
            if((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }

        if(isPlaying) audioRef.current.play();
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{timeFormat(songInfo.currentTime)}</p>
                <div className="track" style={{background: `linear-gradient(to right, ${currentSong?.color[0]}, ${currentSong?.color[1]})`}}>
                    <input 
                        min={0} 
                        max={songInfo?.duration || 0 } 
                        value={songInfo?.currentTime}
                        onChange={dragHandler}
                        type="range" />
                    <div className="animate-track" style={{transform: `translateX(${songInfo?.sliderThumb}%)`}} />
                </div>
                <p>{songInfo.duration ? timeFormat(songInfo.duration) : "00:00"}</p>
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
