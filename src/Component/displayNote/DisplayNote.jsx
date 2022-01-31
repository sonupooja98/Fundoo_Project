import React, { Component } from "react";
import Notes from "../../Pages/notes/Notes";
import Icons from "../icons/Icons";
import '../displayNote/DisplayNote.scss'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import NoteService from "../../services/NotesService";

const noteService = new NoteService();

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: theme.spacing(80)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        width: theme.spacing(100)
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export class DisplayNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: this.props.AddingNotes.title,
            description: this.props.AddingNotes.description,
            color: '#ffffff',
            id: ''


        }
    }
    handleOpenTitle = (item) => {
        this.setState({
            open: true,
            title: item.title,
            description: item.description,
            id: item.id
        })
        console.log(this.state.title)
    }
    colorchange = (val) => {
        this.setState({
            color: val
        })
    }
    handleClose = () => {
        // this.setState({
        //     open: false,
        // })
        const formData = new FormData();
        formData.append("title", this.state.title)
        formData.append("description", this.state.description)
        formData.append("color", this.state.color)
        formData.append("isArchived", this.state.archive)

        noteService.getNote(formData)
            .then(res => {
                this.props.refreshDisplay();
                this.setState({
                    open: false,
                    title: '',
                    description: '',
                    color: '#ffffff',
                    archive: false

                    // console.log(res);

                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        console.log(this.props.AddingNotes)

        return (
            <div className="mainDisplay">
                {this.props.AddingNotes.map((item, index) => (
                    <div className='display-container' style={{ backgroundColor: item.color }}>
                        <div className="Description" onClick={() => this.handleOpenTitle(item)}>
                            {/* <input className="button" id="" placeholder="title"></input>
                            <input className="buttonone" id="" placeholder="description"></input> */}
                            {item.title}<br></br>
                            {item.description}
                        </div>

                        <div className="lastpart">
                            <div className="des-icons">
                                <Icons mode="update" colorchange={this.colorchange} getAllNote={this.props.refreshDisplay} noteId={item.id} />
                            </div>
                        </div>
                    </div>
                ))}

                <BootstrapDialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <div style={{ backgroundColor: this.state.color }}>
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={this.handleClose} >

                                <div className='first-title'>
                                    <input type="text"  style={{ border: "none", outline: "none",backgroundColor: this.state.color }} value={this.state.title} name="title" onChange={(e) => this.howerTitleDesc(e)} />
                                </div>

                            </BootstrapDialogTitle>
                            <DialogContent>

                                <div className='second-des'>
                                    <input type="text"  style={{ border: "none", outline: "none",backgroundColor: this.state.color }} value={this.state.description} name="description" onChange={(e) => this.howerTitleDesc(e)} />
                                </div>

                            </DialogContent>
                            <DialogContent className="close-Icon" >

                                <Icons mode="update" colorchange={this.colorchange} noteId={this.state.id} refreshDisplay={this.props.getAllNotes} />
                                <button autoFocus onClick={(title, description) => this.handleClose(title, description)}>Close</button>
                                {/* <Button autoFocus onClick={(title, description) => this.handleClose(title, description)}> Close </Button> */}
                            </DialogContent>
                        </div>
                    </div>
                </BootstrapDialog>
            </div>
        )
    }
}


export default DisplayNote
