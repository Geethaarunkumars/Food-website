import React from "react";
import {Card} from "react-bootstrap";
import "./Tomato.css"
import "./Pizza.css"

import CardHeader from "react-bootstrap/esm/CardHeader";
import img2 from '../image/chee.png'
import img1 from '../image/cheehum.png'
import img3 from '../image/cheev.png'
import img4 from '../image/chee.png'

import { useNavigate } from "react-router-dom";

function Burger()
{ const Navigate=useNavigate();
       function ChickenBurger()
          {
            Navigate("/ChickenBurger")
          }
          function CheeseBurger()
          {
            Navigate("/CheeseBurger")
          } function VegBurger()
          {
            Navigate("/VegBurger")
          } function HumBurger()
          {
            Navigate("/HumBurger")
          }
    return(
        <div>
              <h1 className="headfPizza">
                     Delicious Burgers
              </h1>
              <div className="cardsp" >
             
          
            <div className="cards"onClick={ChickenBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img1} />
              <CardHeader className="ch">
              Chicken Burger
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
              <div className="cards"onClick={CheeseBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img2}  />
              <CardHeader className="ch">
           Cheese Burger
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
             
              </div> 
           
             
             
              <div className="cards"onClick={VegBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img3} />
              <CardHeader className="ch">
             Vegtable Burger
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
             
              </div> 
              <div className="cards" onClick={HumBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img4} />
              <CardHeader className="ch">
           HumBurger
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
export default Burger