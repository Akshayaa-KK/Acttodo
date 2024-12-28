import { use } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Singnup(props) {


   const useraccounts=props.useraccounts
   const setuseraccount=props.setuseraccount
  
    const[username,seteusername]=useState("")
    const[password,setepassword]=useState("")
    const[confirmPassword,setconfirm]=useState("")
    const[isPasswordConfirmed,setisPasswordConfirmed]=useState(true)
    const navigate=useNavigate()

    function addUsername(event){
        seteusername(event.target.value)
    }

    function addPassword(event)
    {
        setepassword(event.target.value)
    }

    function updateConfirmedPassword(event)
    {
        setconfirm(event.target.value)
    }

    function validatePassword()
    {
        if(password===confirmPassword)
        {
            setuseraccount([...useraccounts,{name:username, accountPassword:password}])

            seteusername("")
            setepassword("")
            setconfirm("");
            navigate("/")
        }
        else{
            setisPasswordConfirmed(false)
        }

        
    }


    return (
    
    <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl">Hey Hi</h1>
            {
                isPasswordConfirmed ?  <p className="my-2">Sign Up here</p> :  <p className="my-2 text-red-500">Please confirm the password correctly!!!</p>
            }
            <div className="flex flex-col gap-2 my-2">
                <input type="text" placeholder="username" className="w-52 border-black p-1 border rounded-md bg-transparent" onChange={addUsername}>
                </input>
                <input type="text" placeholder="password" className="w-52 border-black p-1 border rounded-md bg-transparent" onChange={addPassword}>
                </input>
                <input type="text" placeholder="confirm password" className="w-52 border-black p-1 border rounded-md bg-transparent" onChange={updateConfirmedPassword}>
                </input>
                <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={validatePassword}>
                    Sign Up
                </button>
                <p>
                    Already have an account?{" "}
                    <Link to="/" className="underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    </div>
    
   )
}