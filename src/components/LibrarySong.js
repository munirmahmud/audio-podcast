import React from 'react';

const LibrarySong = ({song, songs, audioRef, setCurrentSong, isPlaying, setSong}) => {
    const id = song.id;
    const songSelectHandler = async () => {
        const currentSong = songs.filter(state => state.id === id);
        await setCurrentSong(currentSong[0]);

        const activeSong = songs.map(song => {
            if(song.id === id) {
                return {...song, active: true}
            } else {
                return {...song, active: false}
            }
        });

        setSong(activeSong);

        // Promise for playing audio
        if(isPlaying) audioRef.current.play();
    };

    return (
        <div className={`library-song ${song.active ? 'active' : ""}`} onClick={songSelectHandler}>
            <img src={song?.cover} alt={song?.name} />
            <div className="song-info">
                <h3>{song?.name}</h3>
                <h4>{song?.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;
