

export default function ManageActivities(props) {

    const activities=props.activities
    const setActivity=props.setactivity
  
    function deleteActivity(removeItem)
    {
        let currentActivities=activities.filter((item)=>{
            if(item.id==removeItem)
            {
                return false;
            }
            else{
                return true;
            }
        })
        setActivity(currentActivities)
    }
  
    return (<div>
            
               {activities.length===0?<p>You haven't added anything yet?</p>:props.activities.map((item,index)=>{
                return(<div className="flex justify-between">
                      <p>{index+1}.{item.activity}</p>
                      <button className="text-red-500" onClick={()=>deleteActivity(item.id)}>Delete</button>
                    </div>)
            })
                
            }
    </div>
    )

}