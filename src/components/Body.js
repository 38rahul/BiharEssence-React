import resList from "../../utils/mockData"
import RestaurantCard from "../components/RestaurantCard"
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";



const Body = () => {

  // Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);   // []
  const [filteredListOfRestaurant, setfilteredListOfRestaurant] = useState(resList);   // []
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  //const arr = useState(resList)

  //const [listOfRestaurant, setListOfRestaurant] = arr;

  // const listOfRestaurant = arr[0]; 
  // const setListOfRestaurant = arr[1]; 




   //let  filteredlistOfRestaurant = [];

  // Normal Js Variable
    // let  listOfRestaurant2 = [
    //     {
    //                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //                 "info": {
    //                   "id": "156411",
    //                   "name": "The Good Bowl",
    //                   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/ae0aa182-0201-454e-83a1-cf094afecf49_156411.jpg",
    //                   "costForTwo": "₹400 for two",
    //                   "cuisines": [
    //                     "Biryani",
    //                     "Pastas",
    //                     "Punjabi",
    //                     "Desserts",
    //                     "Beverages"
    //                   ],
    //                   "avgRating": 4.3,
    //                 },
    //     },

    //     {
    //         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //                 "info": {
    //                   "id": "750227",
    //                   "name": "Daily Kitchen - Everyday Homely Meals",
    //                   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/0cf40dec-176c-4de8-8ee1-238885cc9374_750227.jpg",  
    //                   "costForTwo": "₹250 for two",
    //                   "cuisines": [
    //                     "Home Food",
    //                     "Indian",
    //                     "North Indian",
    //                     "Thalis"
    //                   ],
    //                   "avgRating": 3.9,
    //                 }
    //     },

    //     {
    //         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //                 "info": {
    //                   "id": "825598",
    //                   "name": "Haldiram's Sweets and Namkeen",
    //                   "cloudinaryImageId": "0627374a8aca92da022f53c8aa4b8bc9",
    //                   "costForTwo": "₹300 for two",
    //                   "cuisines": [
    //                     "North Indian",
    //                     "South Indian",
    //                     "Fast Food"
    //                   ],
    //                   "avgRating": 4.4,
    //                 }
    //     }
    // ];

    useEffect(() =>{
        fetchData();
    }, []);
//6205289803: 2400: kunal kumar gupta: Balagi Elecricals

    // Api Call
    const fetchData =async()=> {
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.547077610639285&lng=73.80271643400191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");  
      // given this method by browser   

    const json = await data.json();
    console.log(json?.data?.cards[3].restaurants?.info);  // 43: 00 min

    setListOfRestaurant(json)
  };

  // if(listOfRestaurant.length==0){
  //   return <Shimmer/>
  // } 
  // conditional Rendering
  // listOfRestaurant.length== 0 ? <Shimmer/>: 

    return  filteredListOfRestaurant.length === 0 ? <Shimmer/>:  (
        <div className="body">
              <div 
                className="filter"> 
                <div className="search">
                  <input type="text" className="search-box" value={searchText}
                   onChange={(e) =>{
                    setSearchText(e.target.value);
                          
                  }}
                  />
                  <button  
                  onClick={() => {          
                    const filteredRestaurant = listOfRestaurant.filter(res =>  res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredListOfRestaurant(filteredRestaurant);

                  }}>Search</button>

                </div>

                <button className="filter-btn" 
                onClick={() =>{
                   let  filteredlistOfRestaurant = listOfRestaurant.filter(res=> res.info.avgRating >4);
                    setfilteredListOfRestaurant(filteredlistOfRestaurant);

                }} 
                > 
                Top Rated Restaurants</button>
              </div>

            <div className="res-container">
                {
                filteredListOfRestaurant.map((restaurant) =>(
                     <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                )
                 }
              </div>
          </div>
        
    )
};

export default Body;