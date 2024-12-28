
import '../index.css'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'
import ActivityContainer from '../components/ActivityContainer'
import { useLocation } from "react-router-dom"

export default function Landing(){
    const location=useLocation();
    const username=location.state.user;
    return(<>

           <div className='bg-black p-16'>
             <div className='bg-[#EFEFEF] p-10 border rounded-md'>
                <Header username={username}/>
                <CardContainer/>
                <ActivityContainer/>
             </div>
           </div>
        </>)
}