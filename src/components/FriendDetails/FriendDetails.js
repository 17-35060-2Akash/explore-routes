import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Friends Details Page</h1>
            <h2>Name: {friend.name}</h2>
            <p>Phone: {friend.phone}</p>
            <p>Username: {friend.username
            }</p>
            <p>city: {friend.address.city}</p>
        </div>
    );
};

export default FriendDetails;