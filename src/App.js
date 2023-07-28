
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Components/SignIn';
import Signup from './Components/Signup';

import Home from './Components/Home';
import Pizza from  './Components/Pizza'
import TomatoPizza from  './Components/TomatoPizza'
import VegPizza from  './Components/Veg'
import ChickenPizza from  './Components/Chicken'
import MashroomPizza from  './Components/Mashroom'
import About from './Components/About';
import Fastfood from './Components/Fastfood';

import Burger from './Components/Burger';
import ChickenBurger from './Components/ChickenBurger';
import CheeseBurger from './Components/CheeseBurger';
import VegBurger from './Components/VegBurger'
import HumBurger from './Components/HumBurger'
import Drinks from'./Components/Drinks'
import Fruit from'./Components/Fruit'
import Tea from'./Components/Tea'
import Soft from'./Components/Soft'
import Coffee from'./Components/Coffee'







import {
  BrowserRouter as Router,
 
  Route,
 
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
   
   
   
     
      <Routes>
    
      <Route path='/' element={<Signup></Signup>}></Route>
      <Route  path='/SignIn' element={<SignIn></SignIn>}></Route>
       <Route path='/Home' element={<Home></Home>}></Route>
       <Route path='/Pizza' element={<Pizza></Pizza>}></Route>
       <Route path='/TomatoPizza' element={<TomatoPizza></TomatoPizza>}></Route>
       <Route path='/Mashroom' element={<MashroomPizza></MashroomPizza>}></Route>
       <Route path='/Veg' element={<VegPizza></VegPizza>}></Route>
       <Route path='/Chicken' element={<ChickenPizza></ChickenPizza>}></Route>
       <Route path='/About' element={<About></About>}></Route>
       <Route path='/Fastfood' element={<Fastfood></Fastfood>}></Route>

       <Route path='/Burger' element={<Burger></Burger>}></Route>
       <Route path='/ChickenBurger' element={<ChickenBurger></ChickenBurger>}></Route>
       <Route path='/CheeseBurger' element={<CheeseBurger></CheeseBurger>}></Route>
       <Route path='/VegBurger' element={<VegBurger></VegBurger>}></Route>
       <Route path='/HumBurger' element={<HumBurger></HumBurger>}></Route>
       <Route path='/Drinks' element={<Drinks></Drinks>}></Route>
       <Route path='/Fruit' element={<Fruit></Fruit>}></Route>
       <Route path='/Soft' element={<Soft></Soft>}></Route>
       <Route path='/Tea' element={<Tea></Tea>}></Route>
       <Route path='/Coffee' element={<Coffee></Coffee>}></Route>
      






       


        </Routes>  
         </Router>
    
    </div>
  );
}

export default App;
