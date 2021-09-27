import React, { useEffect, useState, useCallback } from 'react';
import AnimatedBot from '../AnimatedBot/AnimatedBot';
import VoiceButton from '../utilities/VoiceButton/VoiceButton';
import ThinkingDots from '../utilities/ThinkingDots/ThinkingDots';
import ResponseBox from '../utilities/ResponseBox/ResponseBox';
import Button from '../utilities/Button/Button';
import MicRecorder from 'mic-recorder-to-mp3';

import './Home.css';

const voiceRecorder = new MicRecorder({ bitRate: 128 });

const Home = () => {
    const [responseOn, setResponseOn] = useState(false);
    const [textUp, setTextUp] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [blobURL, setBlobURL] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    const [recordButton, setRecordButton] = useState(false);



    const onMicClick = useCallback(() => {
        setRecordButton(true);
        console.log("recordButton", recordButton)
        if (isBlocked) {
            console.log('Permission Denied');
        }
        else {
            voiceRecorder.start().then(() => {
                setIsRecording(true)
            }).catch((e) => console.error(e));
        }



        const textResponse = "එන්න අපි කතා කරමු";
        if (textUp === "") {
            setTextUp(textResponse);
        }
        else {
            setTextUp("");
        }
        setResponseOn(!responseOn);


    }, [setRecordButton])

    const onClose = useCallback(() => {
        voiceRecorder.stop().getMp3().then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            setBlobURL(blobURL);
            setIsRecording(false)
            setRecordButton(false)
        }).catch((e) => console.log(e));
    }, [setRecordButton])



    useEffect(() => {
        navigator.getUserMedia({ audio: true },
            () => {
                setIsBlocked(false);
            },
            () => {
                setIsBlocked(true);
            },
        )
    }, [])

    return (
        <div className="container-fluid h-100">

            <audio className="position-absolute" src={blobURL} controls="controls" />
            <div className="row h-100">
                <div className="col-lg-6 col-sm-12 my-auto">
                    <AnimatedBot />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="d-flex flex-column align-items-center justify-content-between h-100 p-4">
                        {responseOn && <div className="my-auto">
                            <>
                                <ResponseBox text={textUp} />
                                <Button text={"Click Me"}>
                                </Button>
                                <Button text={"Click Me"}>
                                </Button>
                                <Button text={"Click Me"}>
                                </Button>
                            </>
                        </div>
                        }

                        <div className={`${responseOn && "d-none"} my-auto`}>
                            <ThinkingDots />
                        </div>

                        <div className="mt-auto">
                            {recordButton && <div className="position-relative">
                                <button onClick={onClose} className="close-btn btn-danger rounded-circle border-0">x</button>
                            </div>}
                            <VoiceButton onClick={onMicClick} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home