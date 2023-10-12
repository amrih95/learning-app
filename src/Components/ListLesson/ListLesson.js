import React, {useEffect, useState} from "react";
import './ListLesson.css';
import handleLogo from './../../Assets/Images/handle.svg';
import videoLogo from './../../Assets/Images/video.svg';
import union from './../../Assets/Images/Union.svg';
import timeLogo from './../../Assets/Images/time_circle.svg';
import downloadLogo from './../../Assets/Images/Downlaod.svg';
import logoAction from './../../Assets/Images/vertical.svg';
import Ddown from "../Dropdown/Ddown";
import ButtonAction from "../ButtonAction/ButtonAction";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ListLesson(props) {

  const [dataLesson, setDataLesson] = useState(props.data);
  const [open, openchange]=useState(false);

  // form
  const [lessonName, setLessonName] = useState('')
  const [lessonStatus, setLessonStatus] = useState('')
  const [lessonPreview, setLessonPreview] = useState('')
  const [lessonDate, setLessonDate] = useState('')
  const [lessonTime, setLessonTime] = useState('')


  useEffect(() => {}, [dataLesson]);

  const dragItem = React.useRef();
  const dragOverItem = React.useRef();

  //const handle drag sorting
  const handleSort = () => {

    let _dataLesson = [...dataLesson];

    const draggedItemContent = _dataLesson.splice(dragItem.current, 1)[0];

    _dataLesson.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setDataLesson(_dataLesson);
  };

  const deleteLesson = (e) => {
    setDataLesson(dataLesson.filter(item => item !== e))
  }
  
  const handleDetail = (e) => {
    props.sendData(e)
  }

  const handleclick = () => {
    openchange(true)
  }

  const onSaveLesson = (e) => {
    e.preventDefault()
    openchange(false);
    const nextData = {
      date: lessonDate,
      status: lessonStatus,
      preview: lessonPreview,
      time: lessonTime,
      title: lessonName
    } 

    setDataLesson([...dataLesson, nextData])
  }

  const closepopup = ()=>{
    openchange(false);
  }

  return (
    <div className="app">
      <div className="list-sort">
        {dataLesson.map((item, index) => (
          <div key={index} id={index} className="list-item" draggable onDragStart={(e) => (dragItem.current = index)} onDragEnter={(e) => (dragOverItem.current = index)} onClick={() => {handleDetail(item)}} onDragEnd={handleSort} onDragOver={(e) => e.preventDefault()}>
            <div className="container">
              <div className="item-content">
                <div className="left-session">
                  <div className="content-img-handle">
                    <img src={handleLogo} alt="" />
                  </div>
                  <div className="content-img-video">
                    <img className="img-item" src={videoLogo} alt="" />
                  </div>
                  <div className="content-title">
                    {item.title}
                  </div>
                  <div className="separation"> | </div>
                  <div className="content-status">
                    {item.status}
                  </div>
                  <div className="separation"> 
                    <img src={union} alt="" />
                  </div>
                  <div className="content-preview">
                    Previewable
                  </div>
                </div>
                <div className="right-session">
                  <div className="date-time-item">
                      <img src={timeLogo} alt="" />
                      <span>{item.date}</span>
                  </div>
                  <div className="separation"> 
                    <img src={union} alt="" />
                  </div>
                  <div className="date-time-item">
                      <img src={timeLogo} alt="" />
                      <span>{item.time}</span>
                  </div>
                  <div className="separation"> 
                    <img src={union} alt="" />
                  </div>
                  <div className="download-item">
                      <img src={downloadLogo} alt="" />
                      <span>Downloadable</span>
                  </div>
                  <div className="action-lesson">
                    <Ddown logo={logoAction} onClick={() => deleteLesson(item)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="button-action">
          <ButtonAction icons="add-lesson" onClick={() => handleclick()}/> <span>Add Lesson Material</span>
          <Dialog 
            open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Add Lesson  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                  <form noValidate autoComplete="off" onSubmit={onSaveLesson}>
                    <Stack spacing={2} margin={2}>
                      <TextField variant="outlined" label="Lesson Name" onChange={(e) => setLessonName(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Lesson Status" onChange={(e) => setLessonStatus(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Preview" onChange={(e) => setLessonPreview(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Date" onChange={(e) => setLessonDate(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Time" onChange={(e) => setLessonTime(e.target.value)}></TextField>
                      <Button color="primary" variant="contained" type="submit">Submit</Button>
                    </Stack>
                  </form>
                </DialogContent>
                <DialogActions>
                </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default ListLesson;
