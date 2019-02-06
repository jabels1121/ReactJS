import React from 'react';

const Exercise = () => (
    <div>
        <Message
            headerText="Do you think you complete that exercise?"
            contentText="Yes, of course"
        />
    </div>
);

const Message = props => {
    const {headerText, contentText} = props;
    return (
        <div className="ui message">
            <div className="header">{headerText}</div>
            <p>{contentText}</p>
        </div>
    );
};

export default Exercise;
