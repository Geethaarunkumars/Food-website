import React from "react";
import "./Tomato.css"
import CardHeader from "react-bootstrap/esm/CardHeader";
import {ButtonGroup, Card} from "react-bootstrap";
import { useState } from "react";
import img1 from "../image/c.png"
import img2 from "../image/ch.png"
import img3 from "../image/chi.png"
import img4 from "../image/chic.png"
import img5 from "../image/chick.png"
import img6 from "../image/chicke.png"
import img7 from "../image/chicken.png"
import img8 from "../image/chickenp.png"


function Chicken()
{

    const [n,setN]=useState(0);
    const [a,setA]=useState(0);
    const [b,setB]=useState(0);
    const [c,setC]=useState(0);
    const [d,setD]=useState(0);
    const [e,setE]=useState(0);
    const [f,setF]=useState(0);
    const [g,setG]=useState(0);
    
    
    function increment()
    {
       setN(n+1);
    }
    function increment2()
    {
       setA(a+1);
    }function increment3()
    {
       setB(b+1);
    }function increment4()
    {
       setC(c+1);
    }function increment5()
    {
       setD(d+1);
    }function increment6()
    {
       setE(e+1);
    }function increment7()
    {
       setF(f+1);
    }
    function increment8()
    {
       setG(g+1);
    }
        
        return(
            <div className="cardsaa">
                <h1> Chicken Pizza</h1>
               <div className="cardsa">
                
    
               <div className="cards">
                  
                  <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
                  <Card.Img className="cma" variant="top" src={img1} height={250} />
                  <CardHeader className="chs">
                  Chicken Pizza
                  </CardHeader>
                  <p className="par">
               Rs:250
              </p>
                  <ButtonGroup className="btngrp"> 
                  <button className="btn1"onClick={increment}>Cart</button>
                 <button className="btn2">{n}</button>
               
                  </ButtonGroup>
                  </Card>
                  </div>
                  <div className="cards">
                  
                  <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
                  <Card.Img className="cma" variant="top" src={img2}height={250} />
                  <CardHeader className="chs">
                  Chicken Pizza

                  </CardHeader>
                  <p className="par">
               Rs:250
              </p>
                  <ButtonGroup className="btngrp"> 
                  <button className="btn1"onClick={increment2}>Cart</button>
                 <button className="btn2">{a}</button>
               
                  </ButtonGroup>
                  </Card>
                  </div>  <div className="cards">
                  
                  <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
                  <Card.Img className="cma" variant="top" src={img3} height={250} />
                  <CardHeader className="chs">
                  Chicken Pizza

                  </CardHeader>
                  <p className="par">
               Rs:250
              </p>
                  <ButtonGroup className="btngrp"> 
                  <button className="btn1"onClick={increment3}>Cart</button>
                 <button className="btn2">{b}</button>
               
                  </ButtonGroup>
                  </Card>
                  </div>  <div className="cards">
                  
                  <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
                  <Card.Img className="cmaa" variant="top" src={img4} height={250}/>
                  <CardHeader className="chs">
                  Chicken Pizza

                  </CardHeader>
                  <p className="par">
               Rs:250
              </p>
                  <ButtonGroup className="btngrp"> 
                  <button className="btn1"onClick={increment4}>Cart</button>
                 <button className="btn2">{c}</button>
               
                  </ButtonGroup>
                  </Card>
                  </div>  <div className="cards">
                  
                  <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
                  <Card.Img className="cmaa" variant="top" src={img5}  height={250}/>
                  <CardHeader className="chs">
                  Chicken Pizza

                  </CardHeader>
                  <p className="par">
               Rs:250
              </p>
                  <ButtonGroup className="btngrp"> 
                  <button className="btn1"onClick={increment5}>Cart</button>
                 <button className="btn2">{d}</button>
               
                  </ButtonGroup>
                  </Card>
                  </div>  <div className="cards">
                  
                  <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
                  <Card.Img className="cmaa" variant="top" src={img6}  height={250}/>
                  <CardHeader className="chs">
                  Chicken Pizza

                  </CardHeader>
                  <p className="par">
               Rs:250
              </p>
                  <ButtonGroup className="btngrp"> 
                  <button className="btn1"onClick={increment6}>Cart</button>
                 <button className="btn2">{e}</button>
               
                  </ButtonGroup>
                  </Card>
                  </div>  <div className="cards">
                  
                  <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
                  <Card.Img className="cmaa" variant="top" src={img7}  height={250} />
                  <CardHeader className="chs">
                  Chicken Pizza

                  </CardHeader>
                  <p className="par">
               Rs:250
              </p>
                  <ButtonGroup className="btngrp"> 
                  <button className="btn1"onClick={increment7}>Cart</button>
                 <button className="btn2">{f}</button>
               
                  </ButtonGroup>
                  </Card>
                  </div>
                  <div className="cards">
                  
                  <Card  className="card2"style={{ width: '18rem', height:'400px' }}>
                  <Card.Img className="cma" variant="top" src={img8}  height={250} />
                  <CardHeader className="chs">
                  Chicken Pizza

                  </CardHeader>
                  <p className="par">
               Rs:250
              </p>
                  <ButtonGroup className="btngrp"> 
                  <button className="btn1"onClick={increment8}>Cart</button>
                 <button className="btn2">{g}</button>
               
                  </ButtonGroup>
                  </Card>
                  </div>
            </div>
            </div>
    
        )
    }
    
   
export default Chicken