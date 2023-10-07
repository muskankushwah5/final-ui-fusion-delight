
import React, { useEffect, useState } from 'react';
import "../Menu/Menu.css"
import MainCourse from './MainCourse';
import Starter from './Starter';
import Drinks from './Drinks';
import toast from 'react-hot-toast';
import { allDishesHandler } from '../../services/dishApi';

function MenuComponent({cartItem , setCartItem}) {

  const [dishType,setDishType] = useState("main");
  const [cuisineType,setCuisineType] = useState("thai");

  const [data , setData] = useState([]);
  const [mainCourse , setMainCourse] = useState([]);
  const [starter , setStarter] = useState([]);
  const [drinks , setDrinks] = useState([]);

  const [] = useState([]);

  
  useEffect(()=>{
    const getData = async ()=>{
      try{
        toast.loading("Loading the main Course Dishes");
          const response = await allDishesHandler(cuisineType);
          toast.dismiss();
          if(response){
            setData(response.data);
            toast.success("Successfully fetched");
            return response.data;
          }
          else{
            toast.error("Try again");
          }
      }
      catch(err){
        toast.error(err.message);
      }
    }

    const dishesData = getData();
  },[cuisineType]);

  useEffect(()=>{
    const tempMainCourse = data.filter((dish,index)=>{
      if(String(dish.dish_type) === "main"){
        return true;
      }
      else{
        false
      }
    });

    setMainCourse(tempMainCourse);

    const tempStarter = data.filter((dish,index)=>{
      if(String(dish.dish_type) === "starter"){
        return true;
      }
      else{
        false
      }
    });

    setStarter(tempStarter);

    const tempDrinks = data.filter((dish,index)=>{
      if(String(dish.dish_type) === "drinks"){
        return true;
      }
      else{
        false
      }
    });

    setDrinks(tempDrinks);

  },[data]);

  const chnageHandler = (id)=>{
   setDishType(id);
  }

  const changeTypeHandler = (type)=>{
    setCuisineType(type);
  }

  return (
    <div className="block menu1">
     <div class="select-container">
        <select class="select-menu" onChange={(e) => changeTypeHandler(e.target.value)}>
          <option class="select-option" value="thai">Thai</option>
          <option class="select-option" value="lebanese" >Lebanese</option>
          <option class="select-option" value="indian">Indian</option>
        </select>
        <div class="select-arrow"><span className='select-arrow'>&#9660;</span></div>
      </div>
      <div className="buttons-container"> 
      <button  className="button button--is-active" data-target="pizzaMenu" style={{borderWidth:"0px"}}
      onClick={()=>chnageHandler("main")}>
          Main Course
        </button>
        <button  className="button" data-target="coffeeMenu" style={{borderWidth:"0px"}}
        onClick={()=>chnageHandler("starter")}>
          Starter
        </button>
        <button  className="button" data-target="noodlesMenu" style={{borderWidth:"0px"}}
        onClick={()=>chnageHandler("drinks")}>
          Drinks
        </button>
      </div>
      {String(dishType) === "main" ? <MainCourse data={mainCourse} cartItem={cartItem} setCartItem={setCartItem}/>
       : String(dishType) === "starter" ? <Starter data={starter} cartItem={cartItem} setCartItem={setCartItem}/> 
       : <Drinks data={drinks} cartItem={cartItem} setCartItem={setCartItem}/>}
    </div>
  );
}

export default MenuComponent;