import React from 'react';

const LibrarySong = ({song, setCurrentSong, isPlaying, setSong}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
    };

    return (
        <div className="library-song" onClick={songSelectHandler}>
            <img src={song?.cover} alt={song?.name} />
            <div className="song-info">
                <h3>{song?.name}</h3>
                <h4>{song?.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;
