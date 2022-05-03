import React,{useState} from 'react'
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './DesktopModal.css';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // maxWidth: "80vw",
    // maxHeight : "80vh",
    bgcolor: 'white',
    border: 'none',
    outline : "none",
    boxShadow: 24,
    // p: 0.5,
    borderRadius : "10px",
  };

const DesktopModal = () => {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
    <InfoIcon onClick={handleOpen} />
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="container" >

            <div className="header-section">
                <h1>Course Types</h1>
                <div className="header-content">
                    <div className="subHead">
                        <span className='dot1' ></span>
                        <p>Online</p>
                    </div>
                    <div className="subHead">
                        <span className='dot2' ></span>
                        <p>Offline</p>
                    </div>
                    <div className="subHead">
                        <span className='dot3' ></span>
                        <p>Hybrid</p>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="subMain">
                    <h4>Quick class : <span className='dot1'></span></h4>
                    <p>Bite-Sized Micro Learning content typically &lt;1 hour in duration.</p>
                    <div className="line"></div>
                </div>
                <div className="subMain">
                    <h4>Master class : <span className='dot1'></span> <span className="dot2"></span> </h4>
                    <p>Learn from Subject Matter Experts and Key Opinion Leaders in short courses &lt;6 Hours duration.</p>
                    <div className="line"></div>
                </div>
                <div className="subMain">
                    <h4>Short duration : <span className='dot1'></span> <span className="dot2"></span> </h4>
                    <p>3-5 Day Non-certificate Courses by Universities to upskill in an area of your choice.</p>
                    <div className="line"></div>
                </div>
                <div className="subMain">
                    <h4>Certificate : <span className='dot1'></span> <span className="dot2"></span> </h4>
                    <p>Certificate granting courses to develop deep expertise in subject areas and progress in your career 3-8 Months Duration. </p>
                    <div className="line"></div>
                </div>
                <div className="subMain">
                    <h4>Degree equivalent : <span className='dot1'></span> <span className="dot2"></span> <span className="dot3"></span> </h4>
                    <p>Degree granting or equivalent programs like PGP, PGDM etc usually 1 to 2 Years duration.</p>
                </div>
            </div>

        </div>
        </Box>
      </Modal>
    </div>
  )
}

export default DesktopModal