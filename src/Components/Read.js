import React, {useState, useEffect} from "react";
import axios from "axios";
import URL_API from'./URL_API'



function Read() {
    const [apiData,setapiData]=useState([])

    const callAPI=async()=>{
        const resp=await axios.get(URL_API)
        setapiData(resp.data)
    }
    const userDelete=async(id)=>{
        await axios.delete(URL_API+"/"+id)
        callAPI()
    }
useEffect(()=>{
    callAPI()},[])

    return (
        <div>
            <table border="2px" padding="5px" margin="5px">
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Mobile No</th><th>email</th><th>Password</th><th>Delete</th></tr>
                </thead>
                <tbody>
                    {apiData.map((e)=>{
                        const {id,name,mobileNo,email,password}=e;
                    
                    return <tr key={e.id}><td>{id}</td><td>{name}</td><td>{mobileNo}</td><td>{email}</td><td>{password}</td><td>
                        <button onClick={()=>userDelete(id)}>Delete</button></td></tr>
                        })}
                </tbody>
            </table>
        </div>
    )
};

export default Read;