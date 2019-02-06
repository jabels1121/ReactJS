import React from 'react';

function getTime() {
    return (new Date().toLocaleTimeString());
}

const Exercise = () => {
    return (
        <div>
            <div>Current Time:</div>
            <h3>{getTime()}</h3>
        </div>
    );
};

export {Exercise};