
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Login(props){


    //User accounts

    const useraccounts=props.useraccounts
    
    const navigate=useNavigate()
     
    // State for entered username and password
    const [eusername, seteusername] = useState("");
    const [epassword, setepassword] = useState("");

    // State for user registration check
    const [isregUser, setisregUser] = useState(true);

    // Function to check user credentials
    function checkUser() {

        console.log(useraccounts)
        let userFound = useraccounts.some(
            (element) =>
                element.name === eusername && element.accountPassword === epassword
        );

        if (userFound) {
            setisregUser(true);
            console.log("Login Successful");
            navigate('/landing',{state:{user:eusername}})
        } else {
            setisregUser(false);
            console.log("Login Failed");
        }
      
    }
    

    function handleUsernameChange(event){
        seteusername(event.target.value)

    }

    function handlePasswordChange(event){
        setepassword(event.target.value)
    }


    return(<div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl">Hey Hi</h1>
            {
                isregUser ? <p className="my-2">I help you manage your activies once you login :)</p> : <p className="my-2 text-red-500">Pls Sign Up!!!</p>
            }
            
            <div className="flex flex-col gap-2 my-2">
                <input type="text" placeholder="username" className="w-52 border-black p-1 border rounded-md bg-transparent" onChange={handleUsernameChange}>
                </input>
                <input type="text" placeholder="password" className="w-52 border-black p-1 border rounded-md bg-transparent" onChange={handlePasswordChange}>
                </input>
                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>
                   Log in
                </button>
                <p>
                   Don't have an account?{" "}
                    <Link to="/signup" className="underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    </div>)
}