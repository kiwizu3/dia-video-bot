import React from "react";

import './Button.css';

const Button = ({ onClick, text}) => {
    return (

        <button className="btn btn-diabot btn-sm mx-2" onClick={onClick}>
           {text}
        </button>
    )
}
export default Button;