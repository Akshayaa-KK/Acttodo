import AddActivity from "./AddActivity"
import DisplayActivities from "./DisplayActivities"
import { useState } from "react"

export default function ActivityContainer() {

    const [activities,setactivity]=useState([{
            id:1,
            activity:"Wake up at 5 am"
        },{
            id:2,
            activity:"Do the Oil Pulling and Brush your teeth"
        },{
            id:3,
            activity:"Have your shower"
        },{
            id:4,
            activity:"Have your breakfast and morning tea"
        }])
    
    return (<div className="flex gap-3 flex-wrap">
         <AddActivity activities={activities} setactivity={setactivity}/>
         <DisplayActivities activities={activities} setactivity={setactivity}/>
    </div>)
}