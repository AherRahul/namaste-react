import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/symbols/585.png"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
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
}

const resObj = [
  {
    "info": {
      "id": "359056",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/b1149d94-9860-43ee-b3c0-557474e2d09d_359056.JPG",
      "locality": "Kalyan - Badlapur Road",
      "areaName": "Ambernath",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.2,
      "parentId": "721",
      "avgRatingString": "4.2",
      "totalRatingsString": "2.8K+",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹49"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.4",
          "ratingCount": "2.4K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/pizza-hut-kalyan-badlapur-road-ambernath-rest359056",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "203926",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/2d14392e-f99d-404b-a5be-af48ee242dca_203926.jpg",
      "locality": "Barave Road",
      "areaName": "Kalyan",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.1,
      "parentId": "166",
      "avgRatingString": "4.1",
      "totalRatingsString": "24K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-45 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 06:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹48"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/burger-king-barave-road-kalyan-rest203926",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "75536",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/f265298e-e405-4322-bc05-8fe9e04cbb70_75536.JPG",
      "locality": "Khadakpada Circle",
      "areaName": "Kalyan",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "18K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-45 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/mcdonalds-khadakpada-circle-kalyan-rest75536",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "755038",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/26/658baa94-1b79-4c10-9159-b3108e41bbd8_755038.JPG",
      "locality": "Kalyan",
      "areaName": "Kalyan",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "1040",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.3K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "259"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/theobroma-kalyan-rest755038",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "183611",
      "name": "Faasos - Wraps, Rolls & Shawarma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/fb7dbeee-faf2-417e-91d3-087808a4a2cc_183611.JPG",
      "locality": "Krishna builders",
      "areaName": "Kalyan",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "21809",
      "avgRatingString": "4.1",
      "totalRatingsString": "5.1K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Rolls.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/faasos-wraps-rolls-and-shawarma-krishna-builders-kalyan-rest183611",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "801347",
      "name": "Makhani Darbar",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/3f8e4520-977f-4f5d-9bea-77f454d0af14_801347.JPG",
      "locality": "Krishna builders",
      "areaName": "Kalyan",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 3.6,
      "parentId": "478595",
      "avgRatingString": "3.6",
      "totalRatingsString": "62",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/makhani-darbar-krishna-builders-kalyan-rest801347",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "239706",
      "name": "Monginis Cake Shop",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/18/57becfa5-47a1-4642-90c1-20fee33f18ac_239706.JPG",
      "locality": "Rambaug",
      "areaName": "Kalyan",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Cakes & Pastries",
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "8190",
      "avgRatingString": "4.4",
      "totalRatingsString": "281",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:30:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/monginis-cake-shop-rambaug-kalyan-rest239706",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "263793",
      "name": "Veg Meals By LunchBox",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/7018c595-12b7-44a8-b1b4-68a08df564d3_263793.JPG",
      "locality": "Krishna builders",
      "areaName": "Kalyan",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Thalis",
        "North Indian",
        "Biryani",
        "South Indian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "21938",
      "avgRatingString": "4.1",
      "totalRatingsString": "469",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/veg-meals-by-lunchbox-krishna-builders-kalyan-rest263793",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "575111",
      "name": "Veg Darbar by Behrouz Biryani",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/e2ee6fef-b7f6-406f-9176-48c6932b3af5_575111.JPG",
      "locality": "Krishna builders",
      "areaName": "Kalyan",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "344904",
      "avgRatingString": "4.1",
      "totalRatingsString": "93",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹289"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/veg-darbar-by-behrouz-biryani-krishna-builders-kalyan-rest575111",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "332614",
      "name": "Charcoal Eats - Biryani & Beyond",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/c64bcf86-dc2b-4f6a-9e33-efa3ba10372a_332614.jpg",
      "locality": "SURESH TOWER",
      "areaName": "Kalyan",
      "costForTwo": "₹499 for two",
      "cuisines": [
        "Biryani",
        "Kebabs",
        "North Indian",
        "Mughlai"
      ],
      "avgRating": 4.2,
      "parentId": "5338",
      "avgRatingString": "4.2",
      "totalRatingsString": "5.7K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 04:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/charcoal-eats-biryani-and-beyond-suresh-tower-kalyan-rest332614",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "351124",
      "name": "Grameen Kulfi",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/19c00754-0299-454a-bd65-232914a40945_351124.JPG",
      "locality": "Maya CHS",
      "areaName": "Kalyan west",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.8,
      "veg": true,
      "parentId": "12175",
      "avgRatingString": "4.8",
      "totalRatingsString": "1.4K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹148"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/grameen-kulfi-maya-chs-kalyan-west-rest351124",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "812791",
      "name": "Madno - House of Sundaes",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/16/7f18effa-a21a-4576-9696-b2eaabdf0a6a_812791.JPG",
      "locality": "Birla College Campus Rd",
      "areaName": "Kalyan",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "264082",
      "avgRatingString": "4.3",
      "totalRatingsString": "119",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/madno-house-of-sundaes-birla-college-campus-rd-kalyan-rest812791",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "183618",
      "name": "Sweet Truth - Cake and Desserts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/30/ff93c307-aae8-42fd-8f39-c9999ed05d6b_183618.JPG",
      "locality": "Krishna builders",
      "areaName": "Kalyan",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Bakery",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "4444",
      "avgRatingString": "4.2",
      "totalRatingsString": "1.0K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/sweet-truth-cake-and-desserts-krishna-builders-kalyan-rest183618",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "183614",
      "name": "Behrouz Biryani",
      "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
      "locality": "Krishna builders",
      "areaName": "Kalyan",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4,
      "parentId": "1803",
      "avgRatingString": "4.0",
      "totalRatingsString": "2.8K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Biryani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/behrouz-biryani-krishna-builders-kalyan-rest183614",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "807633",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/57e409e6-6b66-41f7-a3bf-3d290e73465b_807633.JPG",
      "locality": "Khrdakpada",
      "areaName": "Rockmount",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.1,
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "2.6K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-45 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 04:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/kfc-khrdakpada-rockmount-rest807633",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "183622",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/2142c26c-d212-4751-8dbc-4acb20e2cc5e_183622.jpg",
      "locality": "Krishna builders",
      "areaName": "Kalyan",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Thalis",
        "North Indian",
        "Biryani",
        "South Indian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "4925",
      "avgRatingString": "4.2",
      "totalRatingsString": "4.6K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "High%20Protein/rx%20tag%205.png",
            "description": "High Protein"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "High Protein",
                  "imageId": "High%20Protein/rx%20tag%205.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/lunchbox-meals-and-thalis-krishna-builders-kalyan-rest183622",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "387846",
      "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/16/8e2dfe07-4e57-4a16-b83e-c2b42d700d8c_387846.JPG",
      "locality": "Kalyan",
      "areaName": "Kalyan",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "5655",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.0K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹60"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "355"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/frozen-bottle-milkshakes-desserts-and-ice-cream-kalyan-rest387846",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "198914",
      "name": "Baskin Robbins - Ice Cream Desserts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/27c3b255-e9a9-4e16-b553-6ec69532dfeb_198914.JPG",
      "locality": "Ulhasnagar 2",
      "areaName": "Ulhasnagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "5588",
      "avgRatingString": "4.5",
      "totalRatingsString": "183",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹51"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/baskin-robbins-ice-cream-desserts-2-ulhasnagar-rest198914",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "153225",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/5376642b-e589-4311-bfa1-e4e6053f4387_153225.jpg",
      "locality": "Near Royal Residency",
      "areaName": "Ulhasnagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "2093",
      "avgRatingString": "4.7",
      "totalRatingsString": "1.3K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-02 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹400 OFF",
        "subHeader": "ABOVE ₹3999",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/natural-ice-cream-near-royal-residency-ulhasnagar-rest153225",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "169878",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/18/56ded32b-55d2-4e14-a498-b9611ade97ba_169878.JPG",
      "locality": "Maya CHS",
      "areaName": "Kalyan West",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.8,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.8",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹123"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-31f869f5-a6fa-4eed-9d4d-c7404445237e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/nic-ice-creams-maya-chs-kalyan-west-rest169878",
      "type": "WEBLINK"
    }
  }
];

const Body = () => { 
    return (
        <div className="body">
            <div className="search">
                search
            </div>

            <div className="res-container">
                {
                    resObj.map((restaurant) => (
                        <RestroCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <h1>Footer</h1>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app-layout">
            {/* Header */}
            <Header />
            {/* Body */}
            <Body />
            {/* Footer */}
            <Footer />
        </div>
    )
};



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout />);
