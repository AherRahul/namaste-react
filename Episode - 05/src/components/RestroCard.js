import { CDNLink } from './../utils/constant';

// Inline styling
const styleCard = {
    backgroundColor: 'rgba(227, 227, 227, 1)'
}

const RestroCard = (props) => {
// const RestroCard = ({ resName, cusion }) => {
    console.log(props);
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = props?.resData?.info;
    return (
        <div className="res-card" style={styleCard}>
            <img 
            src={CDNLink + cloudinaryImageId}
            alt="restro-image"
            className="res-logo"
            />
            <div className="res-data">
                <h4>{name}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating} Stars</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
};

export default RestroCard;