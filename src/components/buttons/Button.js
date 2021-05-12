import React from "react";

export default Button

const Button = ({ children, ...rest }) => {
    return (
        <button className="button" {...rest}>
            {children}
        </button>
    )
}
