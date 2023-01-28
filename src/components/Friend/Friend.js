import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
    const { name, email, username, id } = friend;
    return (
        <div className='friend' style={{ padding: '20px', margin: '20px', borderRadius: '10px' }}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Username: <strong><Link to={`/friend/${id}`}>{username}</Link></strong></p>
        </div>
    );
};

export default Friend;