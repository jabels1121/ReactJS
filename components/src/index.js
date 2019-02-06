import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    time={new Date().toLocaleTimeString()}
                    commentText={faker.random.words()}
                    avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    time={new Date().toLocaleTimeString()}
                    commentText={faker.random.words()}
                    avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    time={new Date().toLocaleTimeString()}
                    commentText={faker.random.words()}
                    avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    time={new Date().toLocaleTimeString()}
                    commentText={faker.random.words()}
                    avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));