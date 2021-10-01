import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../assets/arrow-left.svg'

const Support = () => {
    return (
        <div>
            <Link to="/">
                <img className="backIcon" src={backIcon} alt="Back" />
            </Link>
            Support
        </div>
    )
}

export default Support
