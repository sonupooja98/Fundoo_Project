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
                        <Color />
                    </Popover>
                </div>
                <IconButton><PhotoOutlinedIcon /></IconButton>
                <IconButton><ArchiveOutlinedIcon /></IconButton>
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
                        <MenuItem onClick={this.handleClose}>Delete note</MenuItem>
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