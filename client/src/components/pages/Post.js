import React, { useState, useEffect } from "react";

import "../../utilities.css";
import "./Post.css";

const Latex = require('react-latex');

const Post = ({ userId, content}) => {
    const [numUpvotes, setUpvotes] = useState('0')
    return (
        <div id = 'postDiv'>
            <p>{userId}</p>
            <Latex>{content}</Latex>
            <div id = 'upvoteSystem'>
                <div id = 'numUpvoteDiv'>
                    <p id = 'numUpvotes'>{numUpvotes}</p>
                </div>
                <div id = 'upvoteDiv'>
                    <button id = 'upvote'>Upvote</button>
                </div>
            </div>
        </div>
    );
  };

  export default Post;