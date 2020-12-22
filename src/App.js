import React, { useState } from 'react'
import Library from './components/Library'
import Player from './components/Player'
import Song from './components/Song'
import data from './data/podcasts'

const App = () => {
    const [songs, setSong] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    
    return (
        <div>
            <Song currentSong={currentSong} />
            <Player 
                currentSong={currentSong} 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} />
                <Library 
                    songs={songs} 
                    setCurrentSong={setCurrentSong}
                    isPlaying={isPlaying}
                    setSong={setSong}
                 />

        </div>
    )
}

export default App
