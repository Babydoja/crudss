import React, { useEffect, useState } from 'react'
import Form from './Form';
import Task from './Task';
import axios from 'axios'
// import  URL  from '../App';
import URL from '../App'

const TaskList = () => {
  const [formData, setFormData] = useState({name:''})
  const {name}=formData 
  const [IsEditing, setIsEditing] = useState(false)
  const[taskID,setTaskID] = useState("")
  // creating task 
  const [tasks, setTasks] = useState([])
  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }
const createTask = async(e) =>{
    e.preventDefault()
try {
    await axios.post('https://backend-crud-fo1s.onrender.com/',formData)
  // toast.success("Task create successful")
    console.log(formData)
    getAllTask()
    setFormData({ name: '' });    
} catch (error) {
   console.log(error);
    // toast.error(error)
}
  }
  const getAllTask = async()=>{
    try {
      const {data}=await axios.get('https://backend-crud-fo1s.onrender.com/')
      setTasks(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllTask()
  }, [])
  
  return (
    <div>
       <h1 className='--center-all --text-purple'>MANAGER</h1> 
       <div className="--flex-between --pb">
          <h3>
            <b>Total Tasks:</b> {tasks.length}
          </h3>
          <h3>
            <b>Completed Tasks:</b> 0
          </h3>
        </div>
        {/* {tasks.map((data,index)=>
         <Task
         tasks={data}
         index={index}
         key={data._id}
         />
        )
      } */}
      
       {
        tasks.map((data,index)=>
        <Task
        tasks={data}
        key={data._id}
        index={index}
        />)
        }
      <Form handleInputChange={handleInputChange} name={name} createTask={createTask}/>
       
    </div>
  )
}

export default TaskList