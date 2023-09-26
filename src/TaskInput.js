import React from "react"
import './App.css';

// import ReactDOM from "react-dom/client"

export default function TaskInput(){
    return( 
        <div className="task_input_box">
            <div className="task_input-item">
                <label  for="title">Title</label>
                <input type="text" placeholder="Title of task" name="task_title" id="title"></input>
            </div>
            <div className="task_input-item">
                <label for="description">Discription</label>
                <input type="text" placeholder="Description of task" name="task_description" id="description"></input>
            </div>
            <div className="task_input-button">
                <button type="submit">ADD</button>
            </div>
        </div>
    )
}