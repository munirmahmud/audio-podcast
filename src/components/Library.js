import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, libraryStatus, audioRef, setCurrentSong, setSong, isPlaying}) => {
    return (
        <div className={`library ${libraryStatus ? 'active' : ''}`}>
            <h2>Song Lists</h2>
            <div className="library-songs">
                {songs.length > 0 && songs.map(song => (
                    <LibrarySong 
                        key={song.id}
                        id={song.id}
                        songs={songs}
                        song={song}
                        audioRef={audioRef}
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
