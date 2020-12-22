import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, setSong, isPlaying}) => {
    return (
        <div className="library">
            <h2>Song Lists</h2>
            <div className="library-songs">
                {songs.length > 0 && songs.map(song => (
                    <LibrarySong 
                        key={song.id}
                        id={song.id}
                        song={song} 
                        setCurrentSong={setCurrentSong}
                        setSong={setSong}
                        isPlaying={isPlaying}
                        />
                ))}
            </div>
        </div>
    )
}

export default Library
