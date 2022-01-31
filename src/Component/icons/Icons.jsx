import React, { Component } from "react";



import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import '../icons/Icons.scss'

import MenuItem from '@material-ui/core/MenuItem';
import { Popover } from '@material-ui/core';

import Color from '../color/Color'
import NotesService from '../../services/NotesService';

const services = new NotesService();
let colorssss = [
    "#f28b82", "#fbbc04", "#fff475", "#ccff90",
    "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb",
    "#fdcfe8", "#e6c9a8", "#e8eaed", "#aecbfa"
]
export class Icon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // popover
            anchorEl: false,
            color1: false
        }
    }

    handleOpen = (e) => {
        this.setState({
            anchorEl: e.currentTarget,
        })
    }


    handleClose = () => {
        this.setState({
            anchorEl: false,
        })
    }

    opencolor = (e) => {
        this.setState({
            color1: e.currentTarget
        })
    }


    Closecolor = () => {
        this.setState({
            color1: false
        })
    }
    newcolor = (col) => {
        console.log("In")
        if (this.props.mode === "create") {
            console.log("in if")
            this.props.colorchange(col)
        }
        else {
            console.log("in else")
            
            let data = {
                "noteIdList": [this.props.noteId],
                "color": col
            }
            services.colorChange(data)
                .then(res => {
                    console.log(res)
                    this.props.colorchange(col)
                    this.props.getAllNote()

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }


    archive = (e) => {
        e.stopPropagation()
        if (this.props.mode === "create") {
            this.props.archivebutton(true)
        }
        else {
            console.log("in else")
         
            let data = {
                "noteIdList": [this.props.noteId],
                "isArchived": true
            }
            services.changearchive(data)
                .then(res => {
                    console.log(res)
                    this.props.getAllNote()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    handledelete = () => {
          let data = {
                "noteIdList": [this.props.noteId],
                "isDeleted": false
            }
            services.deleteNote(data)
                .then(res => {
                    console.log(res)
                    this.props.getAllNote()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    




    render() {

        const { anchorEl, color1 } = this.state
        return (
            <div className="icons-sections">
                <IconButton><AddAlertOutlinedIcon /></IconButton>
                <IconButton><PersonAddAltOutlinedIcon /></IconButton>
                <div>

                    <IconButton><ColorLensOutlinedIcon onClick={(e) => this.opencolor(e)} /></IconButton>
                    <Popover
                        id="simple-menu"
                        anchorEl={color1}
                        keepMounted
                        open={Boolean(color1)}
                        onClose={this.Closecolor}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                    >
                        {/* <Color /> */}
                        {
                            colorssss.map((item, index) => (
                                <div className="colorPallets" onClick={() => this.newcolor(item)}
                                    style={{ backgroundColor: item }}>
                                    {item.backgroundColor}
                                </div>
                            ))
                        }
                    </Popover>
                </div>

                <IconButton><PhotoOutlinedIcon /></IconButton>
                <div>
                    <IconButton><ArchiveOutlinedIcon onClick={(e) => this.archive(e)} /></IconButton>
                </div>
                <div>
                    <IconButton> <MoreVertOutlinedIcon onClick={(e) => this.handleOpen(e)} /> </IconButton>

                    <Popover
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                    >
                        <MenuItem onClick={this.handledelete}>Delete note</MenuItem>
                        <MenuItem onClick={this.handleClose}>Add label</MenuItem>
                        <MenuItem onClick={this.handleClose}>Add drawing</MenuItem>
                        <MenuItem onClick={this.handleClose}>Make a copy</MenuItem>
                        <MenuItem onClick={this.handleClose}>Show tick boxes</MenuItem>
                    </Popover>
                </div>
            </div>
        )
    }
}

export default Icon