import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../profile/Profile.scss'
export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
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
                <p> pooja Ingalahalli</p>
                <p> ingalahallipooja@gmail.com</p>
                <div className="profile-button">
                  <button>signout</button>
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