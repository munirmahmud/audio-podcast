import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    const handleLibraryStatus = () => {
        setLibraryStatus(!libraryStatus);
    };

    return (
        <nav>
            <h1>Audio Podcast</h1>
            <button type="button" onClick={handleLibraryStatus}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav
