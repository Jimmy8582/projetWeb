import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfoPage() {

    const history = useNavigate();


    const [favoriteSong, setFavoriteSong] = useState('');
    const [favoriteArtist, setFavoriteArtist] = useState('');
    const [favoriteLangage, setFavoriteLangage] = useState('');


    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);


    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    const saveChanges = async () => {

        alert('Save functionality not implemented yet');
    }

    const logOut = () => {

        alert('Log out functionality not implemented yet');
    }

    const resetValues = () => {

        alert('Reset functionality not implemented yet');
    }


    return (
        <div className="content-container">
            <h1>Info for ______</h1>
            {showSuccessMessage && <div className="success">Successfully saved user data!</div>}
            {showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
            <label>
                Favorite Song:
                <input
                    onChange={e => setFavoriteSong(e.target.value)}
                    value={favoriteSong} />
            </label>
            <label>
                Favorite Artist:
                <input
                    onChange={e => setFavoriteArtist(e.target.value)}
                    value={favoriteArtist} />
            </label>
            <label>
                Favorite Langage:
                <input
                    onChange={e => setFavoriteLangage(e.target.value)}
                    value={favoriteLangage} />
            </label>
            <hr />
            <button onClick={saveChanges}>Save Changes</button>
            <button onClick={resetValues}>Reset Values</button>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
}

export default UserInfoPage