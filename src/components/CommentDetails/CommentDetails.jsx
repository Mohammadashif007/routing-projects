import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CommentDetails = () => {
    const commentDetails = useLoaderData();
    console.log(commentDetails);
    const {id, name, body, email} = commentDetails;
    return (
        <div>
            <h1>All comments details.</h1>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{body}</h3>
            <h4>{email}</h4>
        </div>
    );
};

export default CommentDetails;