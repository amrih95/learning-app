import React, { useEffect,useState } from "react";
import "./ListSession.css";
import handleLogo from './../../Assets/Images/handle.svg';
import ListLesson from "../ListLesson/ListLesson";
import logoAction from './../../Assets/Images/horisontal.svg';
import editLogo from './../../Assets/Images/Edit.svg';
import ButtonAction from "../ButtonAction/ButtonAction";
import Ddown from "../Dropdown/Ddown";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const initialData = {
    "session": [
      {
        "session_name": "Initial Data 1",
        "lesson": [
          {
            title: 'Storybook Course',
            date: '01 Januari 2001, 06:30',
            time: '00:00',
            status: 'Required',
            preview: 'previewable'
          }
        ]
      },
      {
        "session_name": "Initial Data 2",
        "lesson": [
          {
            title: 'Angular Course',
            date: '01 Januari 2001, 06:30',
            time: '00:00',
            status: 'Closed',
            preview: 'No Previewable'
          }
        ]
      }
    ]
}

const ListSession = (props) => {
    const [initData, setInitData] = useState(initialData['session']);
    const [sessionName, setSessionName] = useState('');
    const [open, openchange]=useState(false);
    const [type, setType] = useState('');
    const [selected, setSelected] = useState('');

    useEffect(() => {}, [initData]);

    const dragItem = React.useRef();
    const dragOverItem = React.useRef();

    const handleSort = () => {
        console.log(initData)
        //duplicate items
        let _initData = [...initData];

        //remove and save the dragged item content
        const draggedItemContent = _initData.splice(dragItem.current, 1)[0];

        //switch the position
        _initData.splice(dragOverItem.current, 0, draggedItemContent);

        //reset the position ref
        dragItem.current = null;
        dragOverItem.current = null;

        //update the actual array
        setInitData(_initData);
    };

    const deleteSession = (e) => {
      setInitData(initData.filter(item => item !== e))
    }

    const addSession = (e) => {
        openchange(true);
        setType(e);
    } 

    const onSaveSession = (e) => {
      e.preventDefault();
      if (type === 'add') {
        const newSession = 
            {
                "session_name": sessionName,
                "lesson": []
            }
        setInitData([...initData, newSession])
      } else {
        setSelected(selected.session_name = sessionName);
      }
      openchange(false);
    }

    const sendData = (data) => {
      props.handleDetail(data);
    }

    const closepopup = ()=>{
      openchange(false);
    }

    const editname = (data, type) => {
      setType(type);
      setSelected(data);
      openchange(true);
    }

    return(
        <>
            { typeof initData !== 'undefined' && initData.length > 0 ? initData.map((item, index) => (
                <>
                    <div key={index} id={index} className="main-wrapper" draggable onDragStart={(e) => (dragItem.current = index)} onDragEnter={(e) => (dragOverItem.current = index)} onDragEnd={handleSort} onDragOver={(e) => e.preventDefault()}>  
                    <div className="session">
                        <div className="session-item">
                            <div className="content-img-handle">
                                <img src={handleLogo} alt="" />
                            </div>
                            <div className="session-title">
                                <span>{item.session_name}</span>
                            </div>
                            <div className="edit-name">
                              <img src={editLogo} alt="" onClick={() => {editname(item,'edit')}}/>
                            </div>
                        </div>
                        <div className="action-session">
                          <Ddown logo={logoAction} onClick={() => deleteSession(item)}/>
                        </div>
                    </div>
                    <div className="lesson">
                        <ListLesson data={item.lesson} sendData={sendData}></ListLesson>
                    </div>
                </div>
                </>
            )) : null}
        <div className="action">
            <ButtonAction icons="add-session" onClick={() => addSession('add')}/>
            <Dialog 
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle> <> { type === 'add' ? 'Add Session' : 'Edit Session'}</>  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                  <form noValidate autoComplete="off" onSubmit={onSaveSession}>
                    <Stack spacing={2} margin={2}>
                      <TextField variant="outlined" label="Session Name" onChange={(e) => setSessionName(e.target.value)}></TextField>
                      <Button color="primary" variant="contained" type="submit">Submit</Button>
                    </Stack>
                  </form>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </div>
        </>
    )
}

export default ListSession;