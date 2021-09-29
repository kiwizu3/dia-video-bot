import React, { useEffect, useState, useCallback } from 'react';
import Welcome from '../welcome/Welcome';
import Bot from '../bot/Bot';

import './Home.css';


const Home = () => {
    const [welcome, setWelcome] = useState(true);

    const onWelcomeClick = () => {
        setWelcome(false)
    }
    return (
        <>
            {welcome ? <Welcome onClick={onWelcomeClick}/> : <Bot />}
        </>
    )
}
export default Home;