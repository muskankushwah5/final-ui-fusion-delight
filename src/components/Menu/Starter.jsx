import React, { useEffect, useState } from 'react'
import "./Menu.css";
import { allDishesHandler } from '../../services/dishApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';


const Starter = ({data , cartItem , setCartItem}) => {

  const navigate = useNavigate();
  const userData = (JSON.parse(localStorage.getItem("user")));
 const [addedToCart,setAddedToCart] = useState(false);

  const [selectedChoice ,setSelectedChoice] = useState({
  });

  const changeTypeHandler = (val)=>{
   const type = val.split(",")[0];
   const prize = Number(val.split(",")[1]);

   setSelectedChoice({
    type : type,
    prize : prize
   });
    
  };

  const handleAddToCart = (dish) => {

    
    const cart = (JSON.parse(localStorage.getItem("cart"))) || [];
    toast.loading("adding the item to cart");

    let alredyThere = false , index =-1;

    const prevCartItem = [...cart];

    const prevTempCartItem = prevCartItem.map((item,indx)=>{
      if(item.foodTitle === dish.title && item.foodCuisine === dish.cuisine_type &&
        item.foodDish === dish.dish_type && item.foodChoices.choice_type === selectedChoice?.type){
          index = indx;
        }
    })

    if(index !== -1){
      prevCartItem[index] = {
        foodTitle : prevCartItem[index].foodTitle,
        foodCuisine : prevCartItem[index].foodCuisine,
        foodDish : prevCartItem[index].foodDish,
        foodChoices : prevCartItem[index].foodChoices,
        prize : prevCartItem[index].prize * 2,
        Quantity : prevCartItem[index].Quantity + 1
      }

      
    }


    if(index === -1){
      const totalPrize = dish.prize + (selectedChoice.prize > 0 ? selectedChoice.prize : 0);
      const data = {
        foodTitle : dish.title,
        foodCuisine : dish.cuisine_type,
        foodDish : dish.dish_type,
        foodChoices : selectedChoice.prize >0 ? {
          choice_type : selectedChoice.type,
          choice_prize : selectedChoice.prize
        } : {},
        prize : totalPrize,
        Quantity : 1
      };



     

      prevCartItem.push(data);
    }


    console.log(prevCartItem);

    setCartItem(prevCartItem);

    localStorage.setItem("cart",(JSON.stringify(prevCartItem)));

    toast.dismiss();
    toast.success("added");


  };
  return (
    <div>
    <div className="menu menu--is-visible" id="pizzaMenu" data-aos="fade-up">
    {data.map((dish,index)=>{
      return <div className="item row align-items-center"  >
      <div className="col-sm-3 pr-5 " style={{marginLeft:"10%",marginRight:"10%",padding:"4%"}}>
      <div style={{justifyContent:"space-between",display:"flex",flexDirection:"row"}}>
      <h3 className="item__title">{dish.title}</h3>
      <span className="item__price" >${dish.prize}</span>
      </div>
      
        
      <img style={{borderRadius:"12px"}} src={dish.dishUrl ? dish.dishUrl : "./img/pizza-1.png"} alt="Cheese Pizza" />
      
      </div>
      <div className="details col-sm-9">
        <div className="item__header">
       
    
        <span className="item__dots"></span>
       
        
        </div>
        <p className="item__description">
         {dish.description}
        </p>
        <div className='super-select-container'>
        <div class="select-container select-container-div">

        {dish.choices.length > 0 && <select class="select-menu" onChange={(e) => changeTypeHandler(e.target.value)}>
        <option class="select-option"  value=""></option>
          {dish.choices.length > 0 && dish.choices.map((choises,idx)=>{
            return <option class="select-option" name={choises.choice_type} value={[choises.choice_type,choises.choice_prize]}>{choises.choice_type}</option>;
          })}
        </select>}
       </div>
        <button
          style={{height:"0%",borderColor:"orangered",fontSize:"24px",fontFamily:"abhaya libre"}}
          
          onClick={()=>handleAddToCart(dish)}
        >
          Add to cart
        </button>
        </div>
      </div>
    </div>
    })}
    
     
  </div>
    </div>
  )
}

export default Starter