import React from "react";
import Button from '@mui/material/Button';
import IconVisible from '@mui/icons-material/Visibility';
import IconAdd from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';


const ButtonAction = ({ icons, onClick }) => {

    if (icons === 'visible') {
         return (
            <Button onClick={onClick} style={{color: "#7800EF", border: '1px solid #7800EF'}} variant="outlined" startIcon={<IconVisible />}>
                Preview
            </Button>
         )
    } else if (icons === 'add-lesson') {
        return (
            <IconButton onClick={onClick} style={{color: "#ffffff", border: '1px solid #7800EF', background: '#7800EF', borderRadius: '10px', width: '37px', height: '37px'}} aria-label="delete">
                <IconAdd />
          </IconButton>
         )
    } else {
        return (
            <Button  onClick={onClick} style={{color: "#fffff", border: '1px solid #7800EF', background: '#7800EF'}} variant="contained" startIcon={<IconAdd />}>
                Add Session
            </Button>
         )
    }

}


export default ButtonAction;