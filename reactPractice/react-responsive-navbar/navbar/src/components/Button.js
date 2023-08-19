import React from "react";
import "../components/Button.css";

const STYLE = [
    "btn--primary",
    "btn--outline"
];

const SIZE = [
    "btn--medium",
    "btn--large"
];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) =>{
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button;