import React, { Component } from "react";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Button } from "@material-ui/core";
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

import '../displayNote/DisplayNote.scss'

export class DisplayNote extends Component {
    render() {
        return (
            <div className="mainDisplay">
                  <input className="partmain" type="text" name="title" id="" placeholder="Title"></input>
                  <input className="main" type="text" name="title" id="" placeholder="Description"></input>
                <div className="displayBox">
                    <div className="Title"></div>
                    <div className="Description"></div>
                    <div className="des-icons">
                        <AddAlertOutlinedIcon />
                        <PersonAddAltOutlinedIcon />
                        <ColorLensOutlinedIcon />
                        <PhotoOutlinedIcon />
                        <ArchiveOutlinedIcon />
                        <MoreVertOutlinedIcon />
                    </div>
                    <Button className="Buttonportion" variant="text" onClick={this.changeTakeClose}>Close</Button>
                </div>
            </div>
        )
    }
}

export default DisplayNote
