import React from "react";
import {Card} from "react-bootstrap";
import "./Pizza.css"
import CardHeader from "react-bootstrap/esm/CardHeader";
import img2 from '../image/mashroo.png'
import img1 from '../image/pi1.png'
import img3 from '../image/vegi.png'
import img4 from '../image/chicken.png'

import { useNavigate } from "react-router-dom";

function Pizza()
{ const Navigate=useNavigate();
       function tomato()
          {
            Navigate("/TomatoPizza")
          }
          function mashroom()
          {
            Navigate("/Mashroom")
          } function veg()
          {
            Navigate("/Veg")
          } function chick()
          {
            Navigate("/Chicken")
          }
    return(
        <div>
              <h1 className="headfPizza">
                     Delicious Pizzas
              </h1>
              <div className="cardsp" >
             
          
            <div className="cards"onClick={tomato}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img1} />
              <CardHeader className="ch">
              Tomato Pizza
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
              <div className="cards"onClick={mashroom}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img2}  />
              <CardHeader className="ch">
            Mashroom Pizza
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
             
              </div> 
           
             
             
              <div className="cards"onClick={veg}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img3} />
              <CardHeader className="ch">
             Vegtable Pizza
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
             
              </div> 
              <div className="cards" onClick={chick}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img4} />
              <CardHeader className="ch">
             ChickenPizza
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
export default Pizza