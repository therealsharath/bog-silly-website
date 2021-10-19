import { useState, useEffect } from 'react';
import axios from "axios";
import failure from './failure.mp3'

function LandingPage(props) {
    const [ip, setIp] = useState(null)

    useEffect(() => {
        if (!ip) getIp();
    }, [ip])
    
    const getIp = () => {
        const config = {
            method: 'get',
            url: "https://api.my-ip.io/ip",
        };

        axios(config)
        .then(function (response) {
            setIp(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="main-container failure">
            {/* <audio autoPlay loop>
                <source src="./failure.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio> */}
            <audio src={failure} autoPlay />
            <img alt="alarm" src="https://thumbs.gfycat.com/MistyFirstGypsymoth-size_restricted.gif"/>
            <p>
                <code>YOU HAVE FAILED THIS TEST</code>
                <br/>
                <br/>
                <code>YOUR IP IS <span className="red-text">{ip}</span></code>
                <br/>
                <br/>
                <code>ONLY WAY TO HIDE YOU IP IS TO PLAY THE DUCK GAME (or use a vpn lol)</code>
            </p>
            <button className="no" onClick={props.onPageChange}>Play again</button>
        </div>
    );
}

export default LandingPage;
