import React from 'react';
import { cardType } from '../item-card';

const CardFooter = ({
    type = cardType.default,
    text,
    hovered = false,
    setIsHovered,
    onClick,
}) => {

    const description = type === cardType.default ? (
        <p>
            Чего сидишь? Порадуй котэ,{" "}
            <span
              className="text-button blue"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={onClick}>купи</span>
            <span className="blue">.</span>
        </p>
    ) : (
        <p className={`${type === cardType.disabled && 'disabled'}`}>
            {text}
        </p>
    );

    return (
        <div className={`card-footer ${hovered && 'hovered'}`}>
            {description}
        </div>
    );
};

export default CardFooter;