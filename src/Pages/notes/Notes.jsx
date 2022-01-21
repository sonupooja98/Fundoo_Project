import React, { Component } from "react";
import DisplayNote from "../../Component/displayNote/DisplayNote";
import TakeANote from "../../Component/takeANote/TakeANote";
import '../notes/Notes.scss'
import NoteService from "../../services/NotesService";




const noteservice = new NoteService();

export class Notes extends Component {

    constructor(props){
        super(props)


        this.state = {
            noteArray :[]
        }
    }

    componentDidMount(){
        this.getAllNotes();
    }

        getAllNotes = () =>{
            noteservice.getNote()
        .then((res)=>{
            console.log(res);
            this.setState({
                noteArray : res.data.data.data,
            })
           
        })
        .catch((err)=>{

        })
    }


   

    






    render() {
        return (
            <div>
                <div className="notesBox">
                <TakeANote />
                <DisplayNote  AddingNotes={this.state.noteArray}/> 
                </div>

                
            </div>
        )
    }
}

export default Notes