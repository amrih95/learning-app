import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './Ddown.css'
const Ddown = ({logo, onClick}) => {


    return(
        <Dropdown>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        <img src={logo} alt="" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={onClick}>Delete Lesson</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default Ddown;