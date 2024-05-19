import React, { useState } from 'react'

const Page = () => {

const [title,setTitle] = useState("")
const [desc,setDesc] = useState("")
const [mainTask,setmainTask] = useState([])

const submitHandler = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask, {title, desc}])
    setTitle("")
    setDesc("")
}

const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
}

let renderTask = <h2>No Task Available</h2>
if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
        return(
        <>
            
        
    
            <li key={i}>
            <div className='renderclass'>
            <h3 style={{width:"20%"}}>{t.title}</h3>
            <h3 style={{width:"20%"}}>{t.desc}</h3>
            <button className='btn2' onClick={()=>{deleteHandler(i)}}>Delete</button>
            </div>
            </li></>
        );
    })
}


  return (
   <>

   
   <h1 className='heading'>MERI TODO LIST</h1>
   <form onSubmit={submitHandler}>
        <div className='container'>
            <input 
            type="text"
            placeholder='Enter Task Here'
            value={title} 
            onChange={(e)=>{
                setTitle(e.target.value)
            }} />


            <input 
            type="text" 
            placeholder='Enter Description Here' 
            value={desc} 
            onChange={(e)=>{
                setDesc(e.target.value)
            }} />
             

            <button className='btn'>Add Task</button>

        </div>
   </form>

   <hr />
   
   <div className='displayTask'>
    
            <ul>
                {renderTask}
            </ul>
   </div>

   </>
  )
}

export default Page
