import React from 'react';


const CommentDetail = (props) => {

    const {author, time, commentText, avatarImage} = props;

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatarImage}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">Today at {time}</span>
                </div>
                <div className="text">{commentText}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
