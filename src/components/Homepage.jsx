import React from 'react';

import scrollDown from '../assets/angle-down.svg';

const Homepage = () => {
    return (
        <div className="main-container">
            <div className="greet-container">
                <div className="greet-content">
                    <h2 className="greet-title">Hey there, welcome to A Blog</h2>
                    <p className="greet-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad aut autem inventore molestiae deserunt. Deleniti ducimus pariatur delectus nostrum fugiat aliquid libero eaque nisi consequatur. Placeat dolores similique, ut ipsam corrupti provident quae inventore asperiores.</p>
                </div>
            </div>

            <div className="scroll-suggestion">
                <p className="scroll-desc">Scoll down to see recent blog posts</p>
                <img className="scroll-img" src={scrollDown} alt="scroll down" />
            </div>
        </div>
    )
}

export default Homepage
