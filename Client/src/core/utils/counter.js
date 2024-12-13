import React from 'react';
import Countdown from 'react-countdown';


const Counter = ({ setDisabled }) => {
    // Renderer callback with condition
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            return (
                setDisabled("block")
            )
        } else {
            setDisabled("none")
            return <span>{minutes}:{seconds}</span>;
        }
    };
    return (
        <div>
            <Countdown date={Date.now() + 12000} renderer={renderer} />
        </div>
    );
};

export default Counter;
