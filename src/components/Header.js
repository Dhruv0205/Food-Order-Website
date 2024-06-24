import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import {  useSelector } from "react-redux";

const Header = () =>{
   
  const{loggedInUser} = useContext(UserContext);   
  const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className="flex justify-between shadow-md bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
          <div className="logo-container">
            <img className="w-40" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?w=900&t=st=1705915902~exp=1705916502~hmac=0ea84015c19aec7159c10ea9c337ec0f01617f6882edf006ae03888751254293" alt="logo" />
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li className="px-4">
               <Link to="/"> Home</Link>  
              </li>
              <li className="px-4">
              <Link to="/about"> About Us</Link> 
              </li>
              <li className="px-4">
              <Link to="/contact"> Contact Us</Link> 
              </li>
              <li className="px-4 font-bold text-lg">
               <Link to="/cart"> Cart- ({cartItems.length}items) </Link> 
              </li>
              <li className="font-bold">
                  {loggedInUser}
              </li>
            </ul>
          </div>
        </div>
    );
  };

  export default Header;