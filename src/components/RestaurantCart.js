import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCart = (props) =>{
    const {loggedInUser} = useContext(UserContext);
    const {resData} = props;
    const {cloudinaryImageId ,name, cuisines, avgRating, costForTwo, slaString} = resData?.info;
   return(
    <div className="m-4 p-4 w-60 rounded-lg bg-gray-100 hover:bg-gray-300 hover:shadow-lg" >
      <img className="res-img rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } alt="" /> 
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars </h4>
      <h4>{costForTwo}</h4>
      <h1 className="font-bold">{loggedInUser}</h1>
      {/* <h4>{slaString} minutes</h4> */}
    </div>
   );
  };

  // higher order component
  // higher order components are a functions which take existing component as input, enhance it and return component 
   
  export const withPromotedLabel = (RestaurantCart) =>{
    return(props) => {
      return(
        <div>
          <label className="bg-black text-white rounded-md absolute m-2 p-2">Promoted</label>
          <RestaurantCart {...props} />
        </div>
      );
    };
  };

  export default RestaurantCart;