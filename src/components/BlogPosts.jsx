import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../assets/arrow-left.svg'

const BlogPosts = () => {
    return (
        <div>
            <Link to="/">
                <img className="backIcon" src={backIcon} alt="Back" />
            </Link>
            Blog Posts
        </div>
    )
}

export default BlogPosts
