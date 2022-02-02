import React, { Component } from 'react';
import DisplayNote from '../../Component/displayNote/DisplayNote';
import NoteService from '../../services/NotesService';
const noteService = new NoteService();

export class Trash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trashNoteArray: []
        }
    }

    componentDidMount() {
        this.updateTrashNote();
    }

    updateTrashNote = () => {
        noteService.trashNotes()
            .then(res => {
                console.log("datdatdat In")
                this.setState({
                    trashNoteArray: res.data.data.data
                })
              
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        console.log("Trash Note")
        return <div>
            <DisplayNote AddingNotes={this.state.trashNoteArray} updateNote={this.updateTrashNote} />
        </div>;
    }
}

export default Trash;