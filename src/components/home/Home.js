import React, { useState } from 'react';
import AnimatedBot from '../AnimatedBot/AnimatedBot';
import VoiceButton from '../utilities/VoiceButton/VoiceButton';
import ThinkingDots from '../utilities/ThinkingDots/ThinkingDots';
import ResponseBox from '../utilities/ResponseBox/ResponseBox';

import './Home.css';

const Home = () => {
    const [responseOn, setResponseOn] = useState(false);
    const [textUp, setTextUp] = useState("");

    const onMicClick = () => {
        const textResponse = "එන්න අපි කතා කරමු";
        if (textUp === "") {
            setTextUp(textResponse);
        }
        else {
            setTextUp("");
        }
        setResponseOn(!responseOn);
    }

    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-lg-6 col-sm-12 my-auto">
                    <AnimatedBot />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="d-flex flex-column align-items-center justify-content-between h-100 p-4">
                        {responseOn && <div className="my-auto">
                            <ResponseBox text={textUp} />
                        </div>
                        }

                        <div className={`${responseOn && "d-none"} my-auto`}>
                            <ThinkingDots />
                        </div>

                        <div className="mt-auto">
                            <VoiceButton onClick={onMicClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home