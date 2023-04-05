import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Album = ({album}) => {
    const {id, title} = album;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/albums/${id}`);
    }
    return (
        <div>
            <h3>This is album</h3>
            <h2>{title}</h2>
            <button> 
                <Link to={`/albums/${id}`}>Show details</Link>
            </button>
            <button onClick={handleNavigate}>Click</button>
        </div>
    );
};

export default Album;