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
            let filterData= res.data.data.data.filter(data=>data.isArchived !==true && data.isDeleted !==true)
            this.setState({
                noteArray : filterData
            })
           
        })
        .catch((err)=>{

        })
    }


   

    






    render() {
        return (
            <div>
                <div className="notesBox">
                <TakeANote refreshDisplay={this.getAllNotes}/>
                <DisplayNote refreshDisplay={this.getAllNotes} AddingNotes={this.state.noteArray}/> 
                </div>

                
            </div>
        )
    }
}

export default Notes