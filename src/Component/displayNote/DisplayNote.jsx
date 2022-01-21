import React, { Component } from "react";

import NoteService from "../../services/NotesService";
import Notes from "../../Pages/notes/Notes";

import Icons from "../icons/Icons";

import '../displayNote/DisplayNote.scss'

export class DisplayNote extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }







    render() {
        console.log(this.props.AddingNotes)

        return (
            <div className="mainDisplay">
                {this.props. AddingNotes.map((item, index) => (
                    <div className='display-container'>
                        <div className="Description">
                            {/* <input className="button" id="" placeholder="title"></input>
                            <input className="buttonone" id="" placeholder="description"></input> */}
                            {item.title}<br></br>
                            {item.description}
                        </div>

                        <div className="lastpart">
                            <div className="des-icons">
                                <Icons />
                            </div>
                        </div>
                    </div>
                 ))} 
            </div>
        )
    }
}


export default DisplayNote
