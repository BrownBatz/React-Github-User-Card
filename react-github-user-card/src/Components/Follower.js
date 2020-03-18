import React from 'react';

export default function Follower({followerData}){
    console.log("Follower data: ", followerData);

    return(
        <div className="follower">
            <img src={followerData.avatar_url} />
            <h1>{followerData.login}</h1>
            <h2>ID: {followerData.id}</h2>
        </div>
    );
}