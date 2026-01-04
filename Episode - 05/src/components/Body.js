import RestroCard from './RestroCard';
import RestaurantList from '../utils/mockData';


const Body = () => { 
    return (
        <div className="body">
            <div className="filter">
                <button className='btn-filter' type='button' onClick={() => {
                    console.log('button called')
                }} >Top Restaurant</button>
            </div>

            <div className="res-container">
                {
                    RestaurantList.map((restaurant) => (
                        <RestroCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
};

export default Body;