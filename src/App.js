import React, { useState } from 'react'
import Player from './components/Player'
import Song from './components/Song'
import data from './data/podcasts'

const App = () => {
    const [lectures, setLectures] = useState(data());
    const [currentSong, setCurrentSong] = useState(lectures[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    
    return (
        <div>
            <Song currentSong={currentSong} />
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
    )
}

export default App
