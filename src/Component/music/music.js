import React from 'react';
import ReactAudioPlayer from "react-audio-player";

function Music(props) {
    const {nhac, play} = props;
    return (
        <div>
            <ReactAudioPlayer
                style={{
                    display: "none"
                }}
                src={nhac}
                autoPlay={play}
                controls
            ></ReactAudioPlayer>
        </div>
    );
}

export default Music;
