// https://some-random-api.ml/animal/birb

import axios from 'axios';
import { useState, useEffect } from 'react';

function LandingPage() {
    const [imgUrl, setImgUrl] = useState(null)
    // const [fact, setFact] = useState(null)

    useEffect(() => {
        if (!imgUrl) getBird();
    }, [imgUrl])

    const getBird = () => {
        const urlCollection = [
            'https://some-random-api.ml/img/birb',
            'https://some-random-api.ml/img/panda',
            'https://some-random-api.ml/img/fox',
            'https://some-random-api.ml/img/dog',
            'https://some-random-api.ml/img/koala',
            'https://some-random-api.ml/img/cat',
            'https://some-random-api.ml/img/red_panda',
            'https://some-random-api.ml/animu/wink',
            'https://some-random-api.ml/animu/pat',
            'https://some-random-api.ml/animu/hug',
        ]

        const urlId = Math.floor(Math.random() * urlCollection.length);

        let config = {
            method: 'get',
            url: urlCollection[urlId],
        };
        
        axios(config)
        .then(function (response) {
            setImgUrl(response.data.link);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="main-container">
            <img src={imgUrl} className="App-logo" alt="logo" />
            <p>
                <code>Is this a duck?</code>
            </p>
            <div className="button-div">
                <button className="yes" onClick={getBird}>Yes</button>
                <button className="no" onClick={() => console.log('No')}>No</button>
            </div>
        </div>
    );
}

export default LandingPage;
