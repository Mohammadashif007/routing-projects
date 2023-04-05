import React from 'react';
import { Link } from 'react-router-dom';

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{body}</h3>
            <h4>{email}</h4>
            <button>
                <Link to = {`/comments/${id}`}>Show Details</Link>
            </button>
        </div>
    );
};

export default Comment;