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
        let config = {
            method: 'get',
            url: 'https://some-random-api.ml/animal/birb',
            headers: {}
        };
        
        axios(config)
        .then(function (response) {
            setImgUrl(response.data.image);
            // setFact(response.data.fact)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="main-container">
            <img src={imgUrl} className="App-logo" alt="logo" />
            {/* <p>
                Random bird fact 
                <br />
                {fact}
            </p> */}
            <p>
                <code>Is this a duck?</code>
            </p>
            <button onClick={getBird}>Yes</button>
        </div>
    );
}

export default LandingPage;
