import React , {useEffect, useState} from "react"
import {URL_API} from'../API'

import axios from'axios'
import './Signup.css' 
import logo1 from'../image/passwo.png'
import logo2 from'../image/passw.png'
import logo3 from'../image/pass.png'
import logo4 from'../image/pass.png'
import logo5 from'../image/pas.jpg'
import { useNavigate } from "react-router-dom"


function SignUp(props)
{
   function LogIn()
   {
    Navigate("/SignIn")
   }
    
    const[name,setName]=useState("")
    const[mail,setMail]=useState("")
    const[password,setPassword]=useState("")
    const[Repeatpassword,setRepeatpassword]=useState("")
    const Navigate=useNavigate()

    var nameregx=/([a-zA-Z]{5,15})/
    var mailregx=/([a-zA-Z0-9]{3,15})+@+([a-zA-Z{3,10}])+\.+([a-zA-Z]{2,10})/
    var passwordregx=/([a-zA-Z0-9]{8,20})/
    var Repeatpasswordregx=/([a-zA-Z0-9]{8,20})/

    const [apiData,setapiData]=useState([])
    const callAPI=async()=>{
        const resp=await axios.get(URL_API)
        setapiData(resp.data)
    }
    useEffect(()=>{
        callAPI()
    },[])
    const postData=async()=>{
        
        apiData.map(async(e)=>{
         if(e.name===name)
            {

            }
        })
        if(name===""&& password==="")
        return alert("please give valid inputs")
        else if(!nameregx.test(name))
        {
            return alert("user name should be altleast 5 characters")
        }
        else if(!mailregx.test(mail))
        {
            return alert("invalid id")
        }
        else if(!passwordregx.test(password))
        {
            return alert("password should be altleast 8 characters")
        }
        else if(!Repeatpasswordregx.test(Repeatpassword))
        {
            return alert("it doesn't match")
        }
        else{

        await axios.post(URL_API,{
        name,
        mail,
        password,
        Repeatpassword
        })
       Navigate("/SignIn")
    }
}
    return (
        <div className="Formpage">
            <div className="FormContainer">
                <div className="FormSignup">
                    <h1> Sign Up</h1>
                    <div className="Form">
                        <div className="Formgroup">
                            <label><img src={logo1} alt="img loading"></img></label>
                         
                           <input type="text" 
                           id="name"
                           placeholder="Your name"
                           value={name}
                           onChange={(e)=>setName(e.target.value)}></input>

                          
                        </div>
                        <div className="Formgroup">
                            <label> <img src={logo2} alt="img loading"></img></label>
                           <input type="mail" 
                           id="mail"
                           placeholder="Your mail"
                           value={mail}
                           onChange={(e)=>setMail(e.target.value)}></input>

                          
                        </div> <div className="Formgroup">
                            <label> <img src={logo3} alt="img loading"></img></label>
                           <input type="password" 
                           id="password"
                           placeholder="Your password"
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}></input>

                          
                        </div> <div className="Formgroup">
                            <label> <img src={logo4} alt="img loading"></img></label>
                           <input type="password" 
                           id="password"
                           placeholder="RepeatPassword"
                           value={Repeatpassword}
                           onChange={(e)=>setRepeatpassword(e.target.value)}></input>

                          
                        </div>
                        <div className="Formgroup">
                         
                            <div className="chkbx">
                                <div className="box">
                           
                           <input type="Checkbox"
                           id="Checkbox">
                           
                               </input>
                               </div>

                               <label>
                               <span>
                                Agree all terms and conditions
                             <a href="#/"> terms and conditions</a>
                             </span>
                             </label>
                             </div>
                            
                              
                             <div className="Formgroup Form-button">
                            <div className="btn">
                            <button className="reg" onClick={()=>postData()} >Register</button>
                            </div> 
                          
                          
                            </div>
                            </div>
                          
                        </div>
                        </div> 
                        </div>
                      <div className="picpage">
                        <img src={logo5}height={500}></img>
                       
                            
                            <div className="btn11">
                            <button onClick={LogIn} className="btn111">Alredy Register</button>
                            </div> 
                            </div>

                           
                       
              
               

</div> 
          
           
       
    )

}

export default SignUp

