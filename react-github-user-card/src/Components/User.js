import React from "react";

export default function User({userData}){
    // userData.data.login for user .avatar_url for picture .id for unique ID

    return(
        <div className="user">
            <h1>User Data: </h1>
            <img src={userData.data.avatar_url} alt="picture of user"></img>
            <h1>{userData.data.login}</h1>
            <h2>ID: {userData.data.id}</h2>
        </div>
    );
}