import React from 'react';

const ApprovalCard = (props) => {
    const { leftBtnText, rightBtnText } = props;
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">{leftBtnText  || 'Approve'}</div>
                    <div className="ui basic red button">{rightBtnText  || 'Reject'}</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;
