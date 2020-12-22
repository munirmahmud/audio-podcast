import React from 'react'

const Song = ({currentSong}) => {
    return (
        <div className="song-wrapper">
            <div className="cover">
                <img src={currentSong?.cover} alt={currentSong?.name} />
            </div>
            <div className="lecture-info">
                <h2>{currentSong?.name}</h2>
                <h3>{currentSong?.artist}</h3>
            </div>
        </div>
    )
}

export default Song
