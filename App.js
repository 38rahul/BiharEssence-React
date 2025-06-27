 import React from "react";
 import ReactDOM from "react-dom/client";
 //import BiharEssence from "./Assets/BiharEssence.jpeg"

/**
 * Header
 *  -Logo
 *  -Nav items
 * 
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *      -img
 *      - Name of Restaurant, Start Rating, Cuisine, Delivery time
 
 * Footer
    - Copyright
    - Links
    - Address
    - Contact
 *  

*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo"  img="/Assets/BiharEssence.jpeg" alt="Logo"/>
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
};

// stles
const StyleCard = () =>{
    backgroundcolor :"black"
}

const RestaurantCard = (props) => { 
   const {resData} = props;
   const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        sla
        } = resData?.info;
   console.log(resData?.info?.name)
    return (
        <div className="res-card"  >
            
            <img
            className="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
            />
            
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}


const resList = [
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "156411",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/ae0aa182-0201-454e-83a1-cf094afecf49_156411.jpg",
                      "locality": "Lakshminarayana Pura",
                      "areaName": "Chinnapanna Halli",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "7918",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.2K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
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
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                        },
                        "freedelMessage": "FREE DELIVERY",
                        "badgeType": "BADGE_TYPE_ONE_LITE"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-c226e301-b50e-4a86-b109-f137facc6ca8"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-lakshminarayana-pura-chinnapanna-halli-rest156411",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "750227",
                      "name": "Daily Kitchen - Everyday Homely Meals",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/0cf40dec-176c-4de8-8ee1-238885cc9374_750227.jpg",
                      "locality": "Kundalahalli",
                      "areaName": "Marathahalli",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Thalis"
                      ],
                      "avgRating": 4.5,
                      "parentId": "444382",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "591",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-20 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-27 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
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
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹100"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                        },
                        "freedelMessage": "FREE DELIVERY",
                        "badgeType": "BADGE_TYPE_ONE_LITE"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-c226e301-b50e-4a86-b109-f137facc6ca8"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-everyday-homely-meals-kundalahalli-marathahalli-rest750227",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "825598",
                      "name": "Haldiram's Sweets and Namkeen",
                      "cloudinaryImageId": "0627374a8aca92da022f53c8aa4b8bc9",
                      "locality": "Brookefields",
                      "areaName": "Marathahalli",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Fast Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "391465",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "343",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-27 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          },
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
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                        },
                        "freedelMessage": "FREE DELIVERY",
                        "badgeType": "BADGE_TYPE_ONE_LITE"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-c226e301-b50e-4a86-b109-f137facc6ca8"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/haldirams-sweets-and-namkeen-brookefields-marathahalli-rest825598",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "823598",
                      "name": "Haldiram's Restaurant",
                      "cloudinaryImageId": "d60730aa72211ed0f0f841c3d7790cfc",
                      "locality": "Marathahalli",
                      "areaName": "ITPL MAIN ROAD BROOKEFIELD",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Thalis"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "parentId": "351771",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "2.7K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-27 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
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
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                        },
                        "freedelMessage": "FREE DELIVERY",
                        "badgeType": "BADGE_TYPE_ONE_LITE"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-c226e301-b50e-4a86-b109-f137facc6ca8"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/haldirams-restaurant-marathahalli-itpl-main-road-brookefield-rest823598",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "415975",
                      "name": "Biryani By Kilo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/a68cf329-fba7-4eb8-81a0-5ca46db43c94_415975.JPG",
                      "locality": "Outer Ring Road",
                      "areaName": "Marathahalli",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "130",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "3.0K+",
                      "sla": {
                        "deliveryTime": 61,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "60-65 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-27 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹149"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                        },
                        "freedelMessage": "FREE DELIVERY",
                        "badgeType": "BADGE_TYPE_ONE_LITE"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.6",
                          "ratingCount": "361"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-c226e301-b50e-4a86-b109-f137facc6ca8"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/biryani-by-kilo-outer-ring-road-marathahalli-rest415975",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "489129",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "Anand Nagar",
                      "areaName": "Marathahalli",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "61955",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5.6K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-27 02:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                        },
                        "freedelMessage": "FREE DELIVERY",
                        "badgeType": "BADGE_TYPE_ONE_LITE"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-c226e301-b50e-4a86-b109-f137facc6ca8"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chinese-wok-anand-nagar-marathahalli-rest489129",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "450664",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_450664.JPG",
                      "locality": "Whitefield",
                      "areaName": "Whitefield",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                      ],
                      "avgRating": 4.5,
                      "parentId": "281782",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "3.7K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-27 02:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹94"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                        },
                        "freedelMessage": "FREE DELIVERY",
                        "badgeType": "BADGE_TYPE_ONE_LITE"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "764"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-c226e301-b50e-4a86-b109-f137facc6ca8"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-whitefield-rest450664",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "966475",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/94b7f7d6-4c39-4699-9582-6f8ddee7fd5d_966475.JPG",
                      "locality": "PR Layout",
                      "areaName": "Marathahalli",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "1040",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "890",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-26 23:00:00",
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
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                        },
                        "freedelMessage": "FREE DELIVERY",
                        "badgeType": "BADGE_TYPE_ONE_LITE"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-c226e301-b50e-4a86-b109-f137facc6ca8"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/theobroma-pr-layout-marathahalli-rest966475",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  }
                ]


const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>

            <div className="res-container">
                {
                /* <RestaurantCard resData = {resList[0]}/>
                <RestaurantCard resData = {resList[1]}/>
                <RestaurantCard resData = {resList[2]}/>
                <RestaurantCard resData = {resList[3]}/>
                <RestaurantCard resData = {resList[4]}/>
                <RestaurantCard resData = {resList[5]}/>
                <RestaurantCard resData = {resList[6]}/>
                <RestaurantCard resData = {resList[7]}/>
                
                 */
                resList.map((restaurant) =>(
                     <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                )
                 }
                


            </div>
        </div>
        
    )
}

const AppLayout = () => {

    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<AppLayout/>);

// JSX



