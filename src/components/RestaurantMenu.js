import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
   const[resInfo, setResInfo] = useState(null); 
   const {resId} = useParams();
   const[showIndex, setShowIndex] = useState(null);
   useEffect(()=>{
       fetchMenu(); 
   }, []);

   const fetchMenu = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7611352&lng=75.8750008&restaurantId="+resId)

    const json = await data.json();
    setResInfo(json.data);
    console.log(resInfo);
   } ;
  
  if( resInfo === null ) return <Shimmer />;
  
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
   
   console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.["card"]?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

 console.log(categories);

  return (
    <div className="text-center">
     <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
       {cuisines.join(", ")}- {costForTwoMessage}
      </p>
       
        {/* control component because parent is controlling when to show the items*/}
       {/* categories accordians */}
       {categories.map((category, index)=>(
          <RestaurantCategory 
         key={category?.card?.card.title} 
         data={category?.card?.card} 
        showItem = {index === showIndex ? true : false}
        setShowIndex={()=> setShowIndex(index)}
        />
      ))} 
     {/* { <ul>  
        { itemCards.map( (item) =>
        <li key={item.card.info.id}> 
             {item.card.info.name} - {"Rs. "} {item.card.info.price/100}
        </li>
        ) }
     </ul>
    }  */}
       </div>
  );
};

export default RestaurantMenu;