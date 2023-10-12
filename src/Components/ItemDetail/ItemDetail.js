import React from "react";
import './ItemDetail.css';

function ItemDetail(props) {

    return(
        <>
         { typeof props.data !== 'string' ? <div className="detail">
            <span>Event Schedule: {props.data.date},  {props.data.time}</span>
        </div> 
       : 
        <div className="empty">
            <p>empty data: please click some lesson to see the detail</p>
        </div>
        }
        </>
    )
}

export default ItemDetail;