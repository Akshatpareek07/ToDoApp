import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai';
import '../App.css';

const CompleteComp = (props) => {
  return (
    <div className='todo-list-item' key={props.key}>
    <div>
        <h3>{props.itm.title}</h3>
        <p>{props.itm.description}</p>
        <p><small>{props.itm.completedOn}</small></p>
    </div>
    <div>
        <AiOutlineDelete className='icon' onClick={props.deleteEvent} title='Delete?'/>
    </div>
    </div>
  )
}

export default CompleteComp