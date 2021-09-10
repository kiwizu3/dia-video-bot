import React from "react";

import './VoiceButton.css';

const VoiceButton = ({onClick}) => {
    return (
        <div className="voice-button-container-outer">
            <div className="voice-button-container-mid">
                <div className="voice-button-container-inner">
                    <button className="btn btn-primary voice-button" onClick={onClick}>
                        <img src="./assets/images/mic.svg" width="30" alt="microphone-icon"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default VoiceButton;