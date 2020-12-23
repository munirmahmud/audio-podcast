import React, { useRef, useState } from 'react'
import Library from './components/Library'
import Nav from './components/Nav'
import Player from './components/Player'
import Song from './components/Song'
import data from './data/podcasts'

const App = () => {
    const [songs, setSong] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryStatus, setLibraryStatus] = useState(false);
    const audioRef = useRef(null);

    const timeUpdateHandler = e => {
        const currentTime = e.target.currentTime,
            duration = e.target.duration;

        setSongInfo({
            ...songInfo,
            currentTime,
            duration
        });
    };

    const [songInfo, setSongInfo] = useState({
        currentTime: "0",
        duration: 0
    });
    
    return (
        <div className="app">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player 
                currentSong={currentSong} 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                setSongInfo={setSongInfo}
                songInfo={songInfo}
                songs={songs}
                setCurrentSong={setCurrentSong}
                />

            <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
                />

                <Library 
                    songs={songs} 
                    setCurrentSong={setCurrentSong}
                    isPlaying={isPlaying}
                    setSong={setSong}
                    audioRef={audioRef}
                    libraryStatus={libraryStatus}
                 />
        </div>
    )
}

export default App
