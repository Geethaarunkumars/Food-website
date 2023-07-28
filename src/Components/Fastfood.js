import React from "react";
import {Card} from "react-bootstrap";
import "./Pizza.css"
import CardHeader from "react-bootstrap/esm/CardHeader";
import img2 from '../image/mashroo.png'
import img1 from '../image/pi1.png'
import img3 from '../image/vegi.png'
import img4 from '../image/chicken.png'
import img1b from '../image/bur1 (10).png'
import img2b from '../image/bur1 (1).png'
import img3b from '../image/bur1 (19).png'
import img4b from '../image/bur1 (2).png'
import img5b from '../image/bur1 (22).png'
import img6b from '../image/bur1 (15).png'
import img9b from '../image/bur1 (7).png'
import img2d from '../image/fruit (1).png'
import img1d from '../image/soft (1).png'
import img3d from '../image/tea (1).png'
import img4d from '../image/coffee (1).png'
import './Tomato.css'




import { useNavigate } from "react-router-dom";

function Fastfood()
{ const Navigate=useNavigate();
       function tomato()
          {
            Navigate("/Pizza")
          }
          function mashroom()
          {
            Navigate("/Pizza")
          } function veg()
          {
            Navigate("/Pizza")
          } function chick()
          {
            Navigate("/Pizza")
          }
          function ChickenBurger()
          {
            Navigate("/Burger")
          }
          function CheeseBurger()
          {
            Navigate("/Burger")
          }
          function HumBurger()
          {
            Navigate("/Burger")
          }  function VegBurger()
          {
            Navigate("/Burger")
          }  function Fruit()
          {
            Navigate("/Drinks")
          }
          function Soft()
          {
            Navigate("/Drinks")
          }function Tea()
          {
            Navigate("/Drinks")
          }
        function Coffee()
        {
          Navigate("/Drinks")
        }

    return(
        <div> 
          
              <h1 className="cardsaa">
                     Delicious Taste
              </h1>
              <div className="cardsa" >
             
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
              <div className="cards"onClick={ChickenBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img1b} />
              <CardHeader className="ch">
              Chicken Burger
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
              
 <div className="cards"onClick={Fruit}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img1d} />
              <CardHeader className="ch">
              Fruit Drinks
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
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
              <div className="cards"onClick={VegBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img3b} />
              <CardHeader className="ch">
             Vegtable Burger
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
             
              </div>  
              <div className="cards"onClick={Soft}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img2d}  />
              <CardHeader className="ch">
         Soft Drinks
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
           
              <div className="cards"onClick={CheeseBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img2b}  />
              <CardHeader className="ch">
           Cheese Burger
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
             
              </div> 
              <div className="cards"onClick={Tea}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img3d} />
              <CardHeader className="ch">
            Iced Tea
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
              <div className="cards"onClick={VegBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img4b} />
              <CardHeader className="ch">
             Vegtable Burger
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
              <div className="cards" onClick={Coffee}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img4d} />
              <CardHeader className="ch">
          Cold Coffee
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
              <div className="cards"onClick={VegBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cms" variant="top" src={img5b} />
              <CardHeader className="ch">
             Vegtable Burger
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
              <div className="cards" onClick={HumBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img6b} />
              <CardHeader className="ch">
           HumBurger
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
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
              <div className="cards" onClick={HumBurger}>
              
              <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
              <Card.Img className="cm" variant="top" src={img9b} />
              <CardHeader className="ch">
           HumBurger
              </CardHeader>
              <p>
              a cousin of pizza with a focaccia-like crust, thick topping of slightly sweet tomato sauce, and little to no cheese
              </p>
              </Card>
              </div>
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
            
            </div>
        </div>
    )
}
export default Fastfood