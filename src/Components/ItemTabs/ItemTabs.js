import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ItemDetail from "../ItemDetail/ItemDetail";
import ListSession from "../ListSession/ListSession";

export default function ItemTabs(props) {
  const [value, setValue] = useState(0);
  const [detailVal, setDetailVal] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDetail = (data) => {
    setDetailVal(data)
  }

  return (
    <div className="container">
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="tabs"
        >
          <Tab  label="Curricullum" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <ItemDetail data={detailVal} />
          <ListSession handleDetail={handleDetail}/>
      </TabPanel>
    </div>
  
  );
}

function TabPanel(props) {
  const {children, value, index} = props;

  return(
    <div>
      {
        value === index && (
          <div>{children}</div>
        )
      }
    </div>
  )
}