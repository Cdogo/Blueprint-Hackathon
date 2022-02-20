import React, { useState, useEffect } from "react";

import "../../utilities.css";
import "./Post.css";
const Latex = require('react-latex');

const Post = ({ userId, content}) => {
    const [numLikes, setLikes] = useState('0')
    return (
        <div>
            <p>{userId}</p>
            <Latex displayMode={true}>{content}</Latex>
        </div>
    );
  };

  export default Post;