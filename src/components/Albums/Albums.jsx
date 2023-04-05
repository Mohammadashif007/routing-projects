import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Album from '../Album/Album';

const Albums = () => {
    const albums = useLoaderData();
    return (
        <div>
            <h1>This is albums</h1>
            {
                albums.map(album => <Album key={album.id} album = {album}></Album>)
            }
        </div>
    );
};

export default Albums;