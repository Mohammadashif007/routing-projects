import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h1>This is comments. {comments.length}</h1>
            {
                comments.map(comment => <Comment key={comment.id} comment = {comment}></Comment>)
            }
        </div>
    );
};

export default Comments;