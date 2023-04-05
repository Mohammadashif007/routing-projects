import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, username, email, id}  = user;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h4>{email}</h4>
        </div>
    );
};

export default UserDetails;