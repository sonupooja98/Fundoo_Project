import React, { Component } from "react";
import DisplayNote from "../../Component/displayNote/DisplayNote";
import TakeANote from "../../Component/takeANote/TakeANote";
import '../notes/Notes.scss'

export class Notes extends Component {
    render() {
        return (
            <div>
                <div className="notesBox">
                <TakeANote /><br></br><br></br><br></br><br></br><br></br>
                <DisplayNote />
                </div>
            </div>
        )
    }
}

export default Notes