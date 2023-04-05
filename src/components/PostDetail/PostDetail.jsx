import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const friendDetail = useLoaderData();
    const {id, title, body} = friendDetail;
    return (
        <div>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <h4>{body}</h4>
        </div>
    );
};

export default PostDetail;