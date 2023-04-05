import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, username, email, id} = user;
    return (
        <div>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h4>{email}</h4>
            <button>
                <Link to={`/users/${id}`}>Show details</Link>
            </button>
        </div>
    );
};

export default User;