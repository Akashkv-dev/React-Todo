import React from 'react'
import { IconTrash } from '@tabler/icons-react';

const ListTask = ({task, index, removeTask,complete}) => {
  
  return (
    <>
      <div className='list-tasks'>
        <input onClick={()=>complete(index)} 
        className='checkbox-btn'
        type='checkbox' 
        checked={task.completed}/>
        
        <p style={{ textDecoration: task.completed ? 'line-through 2px solid red' : 'none' }}>{task.title}</p>
        
        <button onClick={()=>{removeTask(index)}} className='delete-btn'><IconTrash stroke={2} />
</button>
      </div>
    </>
  )
}

export default ListTask