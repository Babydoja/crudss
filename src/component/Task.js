import React from 'react'
import './Task.css';

import {MdOutlineDeleteForever,MdEditNote} from 'react-icons/md';

const Task = ({index,tasks}) => {
  return (
    <div>
        <div className='task'>
        <p>{index+1}<b>{tasks.name}</b></p>
        <div className='task-icons'>
            
            <MdEditNote />
            <MdOutlineDeleteForever/>
        </div>
       
    </div>
    </div>
  )
}

export default Task