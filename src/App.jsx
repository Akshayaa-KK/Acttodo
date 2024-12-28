
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';



export default function App(){

   const [useraccounts, setuseraccount] = useState([
      { name: "Sowmi", accountPassword: "140221" },
      { name: "Akshaya", accountPassword: "300396" },
      { name: "Kartz", accountPassword: "020390" }
    ]);
    return( <div>
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}></Route>
          <Route path="/" element={<Login useraccounts={useraccounts} />}></Route>
          <Route path="/signup" element={<Signup useraccounts={useraccounts} setuseraccount={setuseraccount}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>)
}