import { useState } from "react"; // Named import
import RestroCard from './RestroCard';
import RestaurantList from '../utils/mockData';


const Body = () => {
    /* 
    React Hook 
        => Normal JS utility functions
        => 
            useState() 
                => 80% use 
                => Superpowerful state variables in react
                => import { useState } from "react"; // Named import
                => Used to create state variable
                => Maintaine the state of component
            useEffect() => 20% use => 

        
    */

    // local state variable - super powerfull variable
    // Destructuring Array return by useState 
    let [filteredResList, setFilteredResList] = useState(RestaurantList);

    // useState Returns an array
    console.log(useState(RestaurantList));

    // Normal JS variable
    // let filteredResList = RestaurantList;

    const filterRestaurant = () => {
        setFilteredResList(
            RestaurantList.filter((restaurant) => restaurant.info.avgRating > 4.3)
        );
    }

    return (
        <div className="body">
            <div className="total-res-count">
                Total Restaurant: {filteredResList.length}
            </div>
            <div className="filter">
                <button className='btn-filter' type='button' onClick={() => {
                    filterRestaurant();
                }} >Top Restaurant</button>
                <button className='btn-reset' type='button' onClick={() => {
                    setFilteredResList(RestaurantList);
                }} >See All</button>
            </div>

            <div className="res-container">
                {
                    filteredResList.map((restaurant) => (
                        <RestroCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
};

export default Body;