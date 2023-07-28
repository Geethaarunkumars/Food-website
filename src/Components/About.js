import React from "react"
import "./Home.css"
import imgtime from '../image/time.png'
import imgbt1 from '../image/fbk.png'
import imgbt2 from '../image/inst.png'
import imgbt3 from '../image/twit.png'
import { Button } from "react-bootstrap"



function About()
{
    return(
      
        <section>
              <div>
              <div className="parentfcontact">
               
                <div className="contact1">
                  <h1 className="headfcon"> About Foodie's Corner</h1>
                  <p className="para2fcon">  We take pride in making a perfect Smoothie providing courteous and helpful service on time all the time.
              We take pride in making a perfect Smoothie providing courteous and helpful service on time all the time.
              We take pride in making a perfect Smoothie providing courteous and helpful service on time all the time.
                  We are the best fast food shop in our town . its really made by your loves and cooprations  </p>
                  <h2 className="h22fcon"> <img className="imgfcon" alt="logo"src={imgtime}></img>Opening Hours</h2>
                  <p className="para22fcon"> Mon-Fri (08.00am-10.00pm) sunday-closed</p>
                </div>
                <div className="contact2">
                <h1 className="headfcon2">CONTACT US</h1>
               <h2 className="h2fcon">Address</h2>: <p className="para2fcon">8638 Amarica Stranfod Mailbon Star</p>
        <h2 className="h2fcon">Mail</h2>: <p  className="para2fcon">support@example.com</p>
        <h2 className="h2fcon">Phone</h2>: <p  className="para2fcon">7464 0187 3535 645</p>
        
        </div>
               
              
        
              
               
        
        
              </div>
             
                <hr></hr>
                <div className="copies">
                <p className="copy">Copy Right@ Example 2021.Design By Sabarigeetha</p>
                <div className="grpcop">
                  <Button className="btcop"><img alt="logo" src={imgbt1}></img></Button>
                  <Button  className="btcop"><img alt="logo" src={imgbt2}></img></Button>
                  <Button className="btcop"><img alt="logo"src={imgbt3}></img></Button>
        
                </div>
                </div>
              </div>
            </section>
            
           
        
           
            )
        }
    
            
        
        export default About