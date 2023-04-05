import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AlbumDetails = () => {
    const album = useLoaderData();
    const navigate = useNavigate();
    const {title, id} = album;
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default AlbumDetails;