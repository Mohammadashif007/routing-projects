import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/comments">Comments</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/users">Users</ActiveLink>
            <ActiveLink to="/albums">Albums</ActiveLink>
        </nav>
    );
};

export default Header;