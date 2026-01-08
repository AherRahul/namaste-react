import { useState, useEffect } from "react"; // Named import
import RestroCard from './RestroCard';
import Shimmer from "./Shimmer";


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
            useEffect() 
                => 20% use 
                => First component is render and then useEffect is called
                => As soon as component rendering is completed then useEffect is run


    */

    // local state variable - super powerfull variable
    // Destructuring Array return by useState 
    const [filteredResList, setFilteredResList] = useState([]);
    const [allFilteredResList, setAllFilteredResList] = useState([]);
    const [searchQuery, setSearchQuey] = useState('');

    // useState Returns an array
    // console.log(useState(RestaurantList));


    // 
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setFilteredResList([]);

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const jsonData = await data.json();
        // Optional chaining
        const allRestaurant = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setFilteredResList(allRestaurant || []);
        setAllFilteredResList(allRestaurant || []);
    }


    // Normal JS variable
    // let filteredResList = RestaurantList;

    const filterRestaurant = () => {
        setFilteredResList(
            filteredResList.filter((restaurant) => restaurant.info.avgRating > 4.3)
        );
    }

    const filterList = () => {
        setFilteredResList(
            filteredResList.filter((restaurant) => restaurant.info.name.toLowerCase().match(searchQuery.toLowerCase()))
        );
    }


    // Conditional rendering
    return (
        <div className="main-body">
            <div className="total-res-count">
                Total Restaurant: {filteredResList.length}
            </div>
            <div className="filter">
                <div>
                    <input 
                        className="search-res-input" 
                        type="text" 
                        placeholder="Search restaurant" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuey(e.target.value)}
                    />
                    <button className='btn-filter' type='button' disabled={searchQuery.length === 0} onClick={() => {
                        filterList()
                    }}>
                        Search
                    </button>
                </div>
                <div className="btn-container">
                    <button className='btn-filter' type='button' onClick={() => {
                        filterRestaurant();
                    }}>
                        Top Restaurant
                    </button>
                    <button 
                        className='btn-reset' 
                        type='button' 
                        disabled={allFilteredResList.length === filteredResList.length}
                        onClick={() => {
                            setSearchQuey('');
                            setFilteredResList(allFilteredResList);
                        }}
                    >
                        Clear
                    </button>
                </div>
            </div>

            <div className="res-container">
                {
                    filteredResList.length === 0 ? <Shimmer /> :  filteredResList.map((restaurant) => (
                        <RestroCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
};

export default Body;