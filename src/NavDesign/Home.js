import React from "react"
import './NavDesign.css'
import { NavbarBrand,Navbar,Nav,NavLink,Button, NavDropdown } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"

import
{
Link} from 'react-router-dom'
import "./Home.css"
import {ButtonGroup, Card, Carousel, CarouselItem,Button} from "react-bootstrap";
import img1 from '../image/babu.jpg'
import img2 from '../image/bggs.jpg'
import img3 from '../image/pz.jpg'
import img4 from '../image/pngp.png'
import img6 from '../image/burpng.png'
import img5 from '../image/pngcc.png'
import img7 from '../image/pngsm.png'
import img8 from '../image/pngc.png'
import img9 from '../image/pngs.png'
import img10 from '../image/sanpng.png'
import img11 from '../image/ffpng.png'
import img12 from '../image/pngt.png'
import img13 from '../image/chef1.png'
import img14 from '../image/chef2.png'
import img15 from '../image/chef3.png'
import imgbt1 from '../image/fbk.png'
import imgbt2 from '../image/inst.png'
import imgbt3 from '../image/twit.png'
import imgtime from '../image/time.png'








import CardHeader from "react-bootstrap/esm/CardHeader";
import {  useNavigate } from "react-router-dom";








function Home()
        {
          const Navigate=useNavigate();
          function Home2()
          {
            Navigate("/Home2")
          }
        
{
    return(
        <div>
        <div>
           
                <Navbar bg="danger bg-opacity-25" variant="info" expand="lg">
                    <NavbarBrand>
                        Foodiees Corner
                    </NavbarBrand>
                   
                    <NavbarToggle></NavbarToggle>
                    <NavbarCollapse  className="parent1">
                        <Nav>
                    
<NavLink className="nav" as={Link} to="/Home"> Home </NavLink> <NavDropdown>
<NavLink className="nav" as={Link} to="/Home"> Home1 </NavLink>

<NavLink className="nav" as={Link} to="/Home"> Home2 </NavLink>
<NavLink className="nav" as={Link} to="/Home"> Home3 </NavLink>
</NavDropdown>
<NavLink className="nav" as={Link} to="/about"> Menu </NavLink>
<NavDropdown>

</NavDropdown>

<NavLink className="nav" as={Link} to="/about"> About </NavLink>
<NavLink className="nav" as={Link} to="/about">Gallery </NavLink>
<NavLink className="nav" as={Link} to="/about">Contact</NavLink>








                        </Nav>
                    </NavbarCollapse>
                    <Button varient="info"> Book a Table</Button>
                    
                   
                </Navbar>
               
        </div>
        
        
        
          
           
              
                <section className="Container">
                 
                <div className="imgs">
                  <Carousel>
                       
        
              <CarouselItem>
             
                <img   className="imgcon" alt="img"src={img1}height={650} >
                </img>
                
                <Carousel.Caption>
                  <div className="bg">
                  <h1 className="headfcou1"> Welcome to Foodie's Corner</h1>
                  <p className="parafcou1">Our mission is to bring healthy food to the city, to offer affordable alternatives that improve people's quality of life, and at the same time, teach our guests the importance of good nutrition.We want to offer fusion food that denotes the cultural exchange between Mexico and our neighbors in the United States, to unite our people with good food — we will serve everyone equally!</p>
                  </div>
                </Carousel.Caption>
               
              </CarouselItem >
              <CarouselItem>
             
                <img  className="imgcon"alt="img" src={img2}height={650} width={1500} ></img>
                <Carousel.Caption>
                <div className="bg">
              
                  <h1 className="headfcou2"> We Make The Best Dishes In Our Town</h1>
                  <p className="parafcou2"> our customers' favorite place and way to eat and drink. Our worldwide operations are aligned around a global strategy called the Plan to Win, which center on an exceptional customer experience – People, Products, Place, Price and Promotion. We are committed to continuously improving our operations and enhancing our customers' experience.</p>
                  </div>
                  </Carousel.Caption>       
               
                </CarouselItem >
              <CarouselItem>
              
        
                <img className="imgcon" alt="img"  src={img3}height={650} width={1500}></img>
                
        
                <Carousel.Caption>
                <div className="bg">
                <h1 className="headfcou" >Special Offer</h1>
                <h2 className="head2fcou"> Good Food, Drinks and Great Company</h2>
                <p className="parafcou">To serve exquisite and authentic Mexican Cuisine representing our cultures and legendary culinary gastronomy with typical dishes with a creative and talented touch, delivering a distinctly unique dining experience to fulfill our guest expectations.</p>
               </div>
                </Carousel.Caption>
              </CarouselItem>
             
            </Carousel>
            
            </div>
           
            <section>
              <div className="totalcard">
             
                
                  <h1 className="HeadingfCard">Our popular menu</h1>
        <h1 className="Bighead">Here Your Favorites</h1>
                 
        <div className="parentfcard">
         
          
        
          <div className="cards">
                <Card className="card1" style={{ width: '18rem', height:'500px' }}>
              <Card.Img className="cm" variant="top" src={img4} />
              <CardHeader className="ch">
                Pizza
              </CardHeader>
              <p>
              We take pride in making a perfect pizza  providing courteous and helpful service  all the time.
              </p>
              </Card>
              </div>
              <div className="cards">
              
              <Card  className="card2"style={{ width: '18rem', height:'500px' }}>
              <Card.Img className="cm" variant="top" src={img5} />
              <CardHeader className="ch">
                Fried Chicken 
              </CardHeader>
              <p>
              We take pride in making a perfect Chicken providing courteous and helpful service on time all the time.
              </p>
              </Card>
             
              </div> 
          <div className="cards">
         
              <Card  className="card3"style={{ width: '18rem', height:'500px' }}>
              <Card.Img className="cm"  variant="top" src={img6}  />
              <CardHeader className="ch">
                Burgers
              </CardHeader>
              <p>      We take pride in making a perfect Burgers and providing courteous and helpful service on time all the time.
              </p>
              </Card>
              
              </div>
          <div className="cards">
              
              <Card  className="card4"style={{ width: '18rem', height:'500px' }}>
              <Card.Img className="cm" variant="top" src={img7} />
              <CardHeader className="ch">
               Smoothies
              </CardHeader>
              <p>
              We take pride in making a perfect Smoothie providing courteous and helpful service on time all the time.
              </p>
              </Card>
             
              
              
              </div>
              <div className="cards">
              
              <Card  className="card5"style={{ width: '18rem', height:'500px' }}>
              <Card.Img className="cm" variant="top" src={img9} />
              <CardHeader className="ch">
               Salads
              </CardHeader>
              <p>
              We take pride in making a perfect Smoothie providing courteous and helpful service on time all the time.
              </p>
              </Card>
             
              
              
              </div> <div className="cards">
              
              <Card  className="card6"style={{ width: '18rem', height:'500px' }}>
              <Card.Img className="cm" variant="top" src={img10} />
              <CardHeader className="ch">
              Sanwitch
              </CardHeader>
              <p>
              We take pride in making a perfect Smoothie providing courteous and helpful service on time all the time.
              </p>
              </Card>
             
              
              
              </div> <div className="cards">
              
              <Card  className="card7"style={{ width: '18rem', height:'500px' }}>
              <Card.Img className="cm" variant="top" src={img11} />
              <CardHeader className="ch">
               French Fries
              </CardHeader>
              <p>
              We take pride in making a perfect Smoothie providing courteous and helpful service on time all the time.
              </p>
              </Card>
             
              
              
              </div> <div className="cards">
              
              <Card  className="card8"style={{ width: '18rem', height:'500px' }}>
              <Card.Img className="cm" variant="top" src={img12} />
              <CardHeader className="ch">
               Tacos
              </CardHeader>
              <p>
              We take pride in making a perfect Smoothie providing courteous and helpful service on time all the time.
              </p>
              </Card>
             
              
              
              </div>
              
           
              </div>
             
               
              </div>
             
                 
            </section>
            <section className="ad">
              <div className="texts">
        <h1 className="Headingfad">Special Offer</h1>
        <h2 className="Bigheadad">GOOD FOOD, DRINKS & GREAT COMPANY.</h2>
        <p className="parafad"> We deliver the best guest service experience with a sense of warmth, friendliness and individual pride so that each guest leaves highly satisfied with our great value, convinced that we are the best choice for their everyday authentic Roadhouse, serving quality steaks, a kickin’ bar and upbeat dining experience.</p>
        
              </div>
              
              <div className="picture">
                <img src={img8} alt="img" height={700}></img>
        
              </div>
            </section>
            <section>
              <div className="secfchef">
              <h1  className="HeadingfCard"> Our Professional</h1>
              <h2 className="Bighead"> Meet Our Stuff</h2>
              <div className="chef">
                <div className="cardfchef">
               <Card className="cardchef">
               <Card.Img className="chefimg" variant="top" src={img13}/>
        
                <CardHeader className="chefhead">
                 Hermalini
                </CardHeader>
                <p className="chefpara">
                12 years experience
                </p>
                <ButtonGroup className="btngrp">
                  <Button className="btnfb" variant="light"> <img src={imgbt1} alt="logo"></img></Button>
                  <Button className="btni" variant="light" >  <img src={imgbt2} alt="logo"></img></Button>
                  <Button className="btnt" variant="light">  <img src={imgbt3} alt="logo"></img></Button>
        
                </ButtonGroup>
               
               </Card>
               </div>
               <div className="cardfchef">
               <Card className="cardchef">
               <Card.Img className="chefimg" variant="top" src={img14}/>
        
                <CardHeader className="chefhead">
                Harry
                </CardHeader>
                <p className="chefpara">
                6 years experience
                </p>
                <ButtonGroup className="btngrp">
                  <Button className="btnfb" variant="light"> <img src={imgbt1} alt="logo"></img></Button>
                  <Button className="btni" variant="light" >  <img src={imgbt2} alt="logo"></img></Button>
                  <Button className="btnt" variant="light">  <img src={imgbt3} alt="logo"></img></Button>
        
                </ButtonGroup>
               </Card>
               </div><div className="cardfchef">
               <Card className="cardchef">
               <Card.Img className="chefimg" variant="top" src={img15}/>
        
                <CardHeader className="chefhead">
                 Potter
                </CardHeader>
                <p className="chefpara">
                10 years experience
                </p>
                <ButtonGroup className="btngrp">
                  <Button className="btnfb"variant="light"> <img src={imgbt1} alt="logo"></img></Button>
                  <Button className="btni" variant="light" >  <img src={imgbt2} alt="logo"></img></Button>
                  <Button className="btnt" variant="light">  <img src={imgbt3} alt="logo"></img></Button>
        
                </ButtonGroup>
               </Card>
               </div>
        
              </div>
              </div>
            </section>
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
              </div>
              <Button onClick={Home2}> Next Home</Button>
              <div >
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
            
            </section>
            </div>
           
            )
        }
    }
            
        
        export default Home
    


