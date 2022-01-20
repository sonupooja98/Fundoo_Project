import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
// import UserService from "../../services/userService";
// import NoteService from "../../services/noteService";

import '../takeANote/TakeANote.scss'


import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import NoteService from "../../services/NotesService";

// const noteService = new NoteService();

export class TakeANote extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: true,
            title:'',
            description:'',
        }
    }
         

    changeTakeOpen = () => {
        this.setState({
            open: false
        })
    }

    handleChange = () => {
        this.setState({
            open: true
        })

        let data = {
            "title": this.state.title,
            "description": this.state.description
        }

        NoteService.addNote(data)
        .then(res=>{
            this.setState({
                open:true,
                title:'',
                description:'',

            // console.log(res);

        })
    })
        // .catch(err=>{
        //     console.log(err);
        // })
    }
         



    handleNotesOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <div>
                <div className="mainContainer">

                    {
                        this.state.open ?
                            <div className="firstContainer">
                                <input className="firstTitle" type="text" placeholder="Take a Note" onClick={this.changeTakeOpen} />
                                <div className="firstTitleIcon">
                                    <CheckBoxOutlinedIcon />
                                    <BrushOutlinedIcon />
                                    <PhotoOutlinedIcon />

                                </div>
                            </div>

                            :
                            <div className="secondContainer">
                                <input className="Titlepart" type="text" name="title" id="" placeholder="Title" onChange={(e) => this.  handleNotesOnChange} /><br></br>
                                <input className="Descriptionpart" type="text" name="description" id="" placeholder="Take a note" onChange={(e) => this.  handleNotesOnChange} />
                                <div className="onecontainer">
                                    <div className="Iconpart">
                                        <AddAlertOutlinedIcon />
                                        <PersonAddAltOutlinedIcon />
                                        <ColorLensOutlinedIcon />
                                        <PhotoOutlinedIcon />
                                        <ArchiveOutlinedIcon />
                                        <MoreVertOutlinedIcon />
                                    </div>

                                    <Button className="secondCButton" variant="text" onClick={this.  handleChange}>Close</Button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default TakeANote