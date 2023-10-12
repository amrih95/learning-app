import React from "react";
import './ItemHeader.css';
import ButtonAction from "../ButtonAction/ButtonAction";
// import Button from "../Button/Button";
 
function ItemHeader() {

    const handleClick = () => {
        console.log('ok')
    }

    return (
        <div className="container header-wrapper">
            <div className="left-item__header">
                <h3>Belajar dan praktek cinematic videography</h3>
                <span>Last edited 18 October 2021 | 13:23</span>
            </div>
            <div className="right-item__header">
                {/* <Button variant="" onClick={() => handleClick()}>previewlah</Button> */}
                <ButtonAction icons="visible" onClick={() => handleClick()}/>
            </div>
        </div>
    )
}

export default ItemHeader;