import React from "react";
import {Card} from "react-bootstrap";
import "./Tomato.css"
import "./Pizza.css"

import CardHeader from "react-bootstrap/esm/CardHeader";
import img2 from '../image/soft (3).png'
import img1 from '../image/fruit (7).png'
import img3 from '../image/tea (5).png'
import img4 from '../image/coffee (2).png'

import { useNavigate } from "react-router-dom";

function Drinks()
{ const Navigate=useNavigate();
       function Fruit()
          {
            Navigate("/Fruit")
          }
          function Soft()
          {
            Navigate("/Soft")
          } function Tea()
          {
            Navigate("/Tea")
          } function Coffee()
          {
            Navigate("/Coffee")
          }
    return(
        <div>
              <h1 className="headfPizza">
                    Healthy Drinks
              </h1>
              <div className="cardsp" >
             
          
            <div className="cards"onClick={Fruit}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img1} />
              <CardHeader className="ch">
              Fruit Drinks
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
              <div className="cards"onClick={Soft}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img2}  />
              <CardHeader className="ch">
         Soft Drinks
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
             
              </div> 
           
             
             
              <div className="cards"onClick={Tea}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img3} />
              <CardHeader className="ch">
            Iced Tea
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
             
              </div> 
              <div className="cards" onClick={Coffee}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img4} />
              <CardHeader className="ch">
          Cold Coffee
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
            
            
            </div>
        </div>
    )
}
export default Drinks