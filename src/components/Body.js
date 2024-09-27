import { useEffect, useState } from "react";
import RestaurantCart, {withPromotedLabel} from "./RestaurantCart";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";

const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCart); 

    const searcHandler = () =>{
      setListOfRestaurants(listOfRestaurants.filter((restaurant)=>{
        return restaurant.data.includes(searchText)
      }))
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
      //fetch is a superpower which is given by browser(js engine have) not by javascript.
        const data = await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7611352&lng=75.8750008&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json);
    };

    // const {setUserName, loggedInUser} = useContext(UserContext);
 
    return listOfRestaurants.length === 0 ?(
     <ShimmerUi /> 
    ):(
      <div className="body">
        <div className="filter flex items-center">
            <div className="search p-4 m-4">
                <input type="text" className="search-box border border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                } } />
                <button className="px-4 py-0.5 m-3 bg-green-300 rounded-md" onClick={searcHandler}>Search</button>
            </div>

            <button className="filter-btn px-3 py-1 m-10 bg-gray-200 rounded-md" onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                  setListOfRestaurants(filteredList);
            }}>
                Top Rated Restaurants
            </button>
        </div>
        <div className="flex flex-wrap">
          {listOfRestaurants.map((restaurant) => (
         <Link
           key={restaurant?.info?.id}
           to={"/restaurant/" + restaurant?.info?.id}
          > 
          {restaurant.info.promoted ? (
          <RestaurantCardPromoted resData={restaurant} />
          ):(
            <RestaurantCart resData={restaurant} />
           )}
          </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;