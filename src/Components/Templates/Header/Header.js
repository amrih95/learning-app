import React from "react";
import line from '../../../Assets/Images/Line.svg';
import vector from '../../../Assets/Images/Vector.svg';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="arrow-back">
                <img src={line} alt="" />
            </div>
            <div className="vector">
                <img src={vector} alt="" />
            </div>
            <div className="breadcrumb_header">
                <span>Event</span>
            </div>
        </div>
    )
}

export default Header;