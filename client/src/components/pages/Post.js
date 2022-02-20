import React, { Component, useEffect } from "react";

import "../../utilities.css";
import "./Post.css";
var Latex = require('react-latex');

const Post = ({ userId, content, handleLogout }) => {
    const [numLikes, setLikes] = useState('0')
    useEffect(() =>{
        get('')
    })
    return (
      <>
        <p className = 'content'>
            <Latex displayMode={true}>{content}</Latex>
        </p>
      </>
    );
  };