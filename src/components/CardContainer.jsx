import Card from "./Card"


export default function CardContainer(){
    return( <div className='flex justify-between flex-wrap gap-7 my-5'>
        <Card bgColor={"#8272DA"} title={"Toronto"} subtitle={"-2"}/>
        <Card bgColor={"#FD6663"} title={"December 25"} subtitle={"14:30:00"}/>
        <Card bgColor={"#FCA201"} title={"Built Using"} subtitle={"React!!"}/>
       </div> )
}