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
    constructor(props) {
        super(props)
        this.state = {

        }
    }







    render() {
        console.log(this.props.AddingValues)

        return (
            <div className="mainDisplay">
                {this.props.AddingValues.map((item, index) => (
                    <div className='display-container'>
                        <div>
                            {item.title} <br />
                            {item.description}
                        </div>


                        <input className="partmain" type="text" name="title" id="" placeholder="Title"></input>
                        <div className="des-icons">
                            <AddAlertOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorLensOutlinedIcon />
                            <PhotoOutlinedIcon />
                            <ArchiveOutlinedIcon />
                            <MoreVertOutlinedIcon />
                        </div>

                    </div>
                ))}
          </div>
        )
    }
}


export default DisplayNote
