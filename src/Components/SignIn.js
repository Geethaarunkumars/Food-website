import React , {useEffect,useState} from "react"
import {URL_API} from'../API'
import axios from'axios'
import {useNavigate }  from "react-router-dom"
import './Signup.css'
import { Button } from "react-bootstrap"
import logo1 from'../image/passwo.png'
import logo5 from'../image/pa.jpg'

import logo3 from'../image/passwo.png'

function SignIn()
{
    const[apiData,setapiData]=useState([])
    const[SignInname,setSignInName]=useState("")
    const[SignInpassword,setSignInPassword]=useState("")
    const Navigate = useNavigate()
    const callAPI= async()=>
    {
        const resp=await axios.get(URL_API)
        setapiData(resp.data)
    }
    useEffect(()=>{
    callAPI()
},[])
    


const Login = () => {
   
    apiData.map(async(e)=>

      {
        if (e.name===SignInname && e.password===SignInpassword)
        {
            Navigate("/Home")
}
      }

  )

}




       
return(
    <div className="Formpage">
    <div className="FormContainer">
        <div className="FormSignIn">
            <h1> Sign In</h1>
            <div className="Forms">
            <div className="Forms2">
                <div className="Formgroup">
                    <label><img src={logo1} alt="img loading"></img></label>
                 
                   <input type="text" 
                   id="name"
                   placeholder="Your name"
                   value={SignInname}
                   onChange={(e)=>setSignInName(e.target.value)}></input>
                   </div>

                 

                  <div className="Formgroup">
                    <label><img src={logo3} alt="img loading"></img></label>
                 
                   <input type="text" 
                   id="password"
                   placeholder="Your password"
                   value={SignInpassword}
                   onChange={(e)=>setSignInPassword(e.target.value)}></input>
                   </div>
                   </div>

                 <div className="btgrp">
                 <div className="Formgroup">
                    <button className="btn111"onClick={()=> Login() }>Log In</button>
                    </div> 
                 </div>
        
            </div>
                  </div>
                  </div> 
                  <div className="picpage">      
<img className="imgs" src={logo5} alt="img"></img>
</div> 
</div> 



            
          
                    
                  
                  
  
                 
  
  )
  }
  
  
  
  export default SignIn 