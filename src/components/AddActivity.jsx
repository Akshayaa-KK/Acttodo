import { useState } from "react"

export default function AddActivity(props){

    let activities=props.activities
    let setactivity=props.setactivity

    const [userInput,setUserInput]=useState(" ")
    
     
   let handleChange=(event)=>{
    setUserInput(event.target.value)
   }
   
   function addItem(newActivity){
       let newObject={
        id:activities.length+1,
        activity:userInput
       }
       setactivity([...activities,newObject])
       setUserInput("")
   }
  
    return(<div>
         <div className='flex flex-col gap-3'>
            <h1>Manage Activities</h1>
            <div>
                <input type='text' placeholder='Next Activty?' className='p-1 border border-black bg-transparent' value={userInput} onChange={handleChange} />
                <button className='bg-black text-white p-1 border border-black' onClick={()=>addItem()}>Add</button>
            </div>
        </div>
    </div>)
}