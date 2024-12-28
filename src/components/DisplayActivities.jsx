import { useState } from "react"
import ManageActivities from "./ManageActivities"



export default function DisplayActivities(props) {
  
    
    return (<div className="bg-[#BDB4EA] p-4 border rounded-md my-5 flex-grow">
        <h1 className="font-medium text-2xl">Today's Activities</h1>
        <ManageActivities activities={props.activities} setactivity={props.setactivity}/>
    </div>)
}