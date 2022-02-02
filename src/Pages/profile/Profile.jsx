import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../profile/Profile.scss'

import { Link } from 'react-router-dom';
export default function PopoverPopupState() {
  const singoutToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem("email")
    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")
    
};
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button  {...bindTrigger(popupState)}>
          <AccountCircleOutlinedIcon />
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
                <Typography sx={{ p: 2 }}>
            <div >
              <div className="profile-container">
              <p> {localStorage.getItem("firstName")}{' '} {localStorage.getItem("lastName")}</p>
                
                <p>  {localStorage.getItem("email")}</p>
                <div className="profile-button">
                <Link to="/signup"> <button onClick={singoutToken} >signout</button></Link>
                </div>
              </div>
            </div>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}