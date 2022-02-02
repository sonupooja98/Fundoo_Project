import React, { Component } from 'react';
import DisplayNote from '../../Component/displayNote/DisplayNote';
import NoteService from '../../services/NotesService';

const noteService = new NoteService();


export class Archive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            archiveNoteArray: []
        }
    }

    componentDidMount() {
        this.archiveNote();
    }

    archiveNote=()=>{
        noteService.archiveNotes()
        .then(res =>{
            console.log("datdatdat In",res)
            this.setState({
                archiveNoteArray:res.data.data.data
            })
           
        })
        .catch(err =>{
            console.log(err)
        })
    }
    render() {
      
        return (
            <div>
                
                <DisplayNote AddingNotes={this.state.archiveNoteArray} updateNote={this.archiveNote}/>
            </div>
        )
    }
}

export default Archive;
