import React from 'react';
import './ResponseBox.css';

const ResponseBox = ({text}) => {
    return (
        <h1 className="response-text onload-transition">
             {text || "එන්න අපි කතා කරමු. (Test Eng)"}
        </h1>
    )
}
export default ResponseBox;