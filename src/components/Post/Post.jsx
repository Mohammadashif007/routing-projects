import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title, body, id} = post;
    return (
        <div>
            <h2>Title : {title}</h2>
            <h3>{body}</h3>
            <button>
                <Link to={`/post/${id}`}>Show Details</Link>
            </button>
        </div>
    );
};

export default Post;