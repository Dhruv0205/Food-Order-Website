import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ItemList = ({items}) =>{
  
  const dispatch = useDispatch();

 const handleClick = (item) =>{
   dispatch(addItem(item));
   console.log(item);
 };

  return(
    <div>
        {items.map((item) =>(
         <div
           key={item.card.info.id}
           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
         >
        <div>
          <div className="py-2">
           <span>{item.card.info.name }</span>
           <span>
            - Rs. 
            {item.card.info.price 
            ?" " + item.card.info.price/100
             :" " + item.card.info.defaultprice/100 }
           </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
    
            <div className="absolute">
              <button className="bg-black text-white mx-3 rounded-lg shadow-lg " onClick={()=>handleClick(item)}>Add +</button> 
             </div>
             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} />
           </div>
         </div>
        ))}
    </div>
  );
};

export default ItemList;