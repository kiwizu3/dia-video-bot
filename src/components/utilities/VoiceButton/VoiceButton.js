import React from "react";

import './VoiceButton.css';

const VoiceButton = ({ onClick, active }) => {
    return (
        <div className={`voice-button-container-outer ${active && 'active-bg'}`}>
            <div className={`voice-button-container-mid ${active && 'active-bg'}`}>
                <div className={`voice-button-container-inner ${active && 'active-bg'}`}>
                    <button className="btn btn-primary voice-button" onClick={onClick}>
                        <img src="./assets/images/mic.svg" width="30" alt="microphone-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default VoiceButton;