import { useEffect, useState, useContext } from "react";
import RestaurantCart, {withPromotedLabel} from "./RestaurantCart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () =>{
    /* 
     const resList = [
        {
          "info": {
            "id": "65329",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "drqn7mfycvbk6f8yjc9u",
            "locality": "Vijay Nagar",
            "areaName": "Meghdoot Park Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-23 00:55:00",
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
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-vijay-nagar-meghdoot-park-road-indore-65329",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "73884",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Malhar Mega Mall",
            "areaName": "Ab Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4.1,
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 4.1,
              "serviceability": "SERVICEABLE",
              "slaString": "27 mins",
              "lastMileTravelString": "4.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-23 02:00:00",
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
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-malhar-mega-mall-ab-road-indore-73884",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "62196",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Malhar Mega Mall",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Healthy Food",
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "2",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 4.1,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "4.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:58:00",
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
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-malhar-mega-mall-vijay-nagar-indore-62196",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "64710",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Scheme No 54",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:15:00",
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
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-scheme-no-54-vijay-nagar-indore-64710",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "86717",
            "name": "Cafe Coffee Day",
            "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
            "locality": "54th  Scheme",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Burgers",
              "Ice Cream",
              "Bakery",
              "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "1",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 3.7,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "3.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:00:00",
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-54th-scheme-vijay-nagar-indore-86717",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "65130",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "Scheme No.54",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Fast Food",
              "Snacks",
              "Indian",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "21809",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:59:00",
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹110"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-scheme-no-54-vijay-nagar-indore-65130",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "65613",
            "name": "Natural Ice Cream",
            "cloudinaryImageId": "lrwvw9dmd3hg2nmtewfb",
            "locality": "Vijay Nagar",
            "areaName": "A.B. Road",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "2093",
            "avgRatingString": "4.7",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:50:00",
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
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/natural-ice-cream-vijay-nagar-a-b-road-indore-65613",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "223960",
            "name": "Oven Story Pizza - Standout Toppings",
            "cloudinaryImageId": "b39e4312ae2e9f65c3b58faaed83f488",
            "locality": "Vijay Nagar",
            "areaName": "Sheetal Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "3534",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-35 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:59:00",
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-vijay-nagar-sheetal-nagar-indore-223960",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "63273",
            "name": "Sanjha Chulha",
            "cloudinaryImageId": "i673c8okei5gr2mwfygh",
            "locality": "54 Scheme",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Mughlai",
              "Thalis"
            ],
            "avgRating": 4.3,
            "parentId": "1356",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:00:00",
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sanjha-chulha-54-scheme-vijay-nagar-indore-63273",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "601090",
            "name": "The Brooklyn Creamery - Healthy Ice Cream",
            "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
            "locality": "Oriental Market",
            "areaName": "VIJAYA NAGAR",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream",
              "Healthy Food"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "236673",
            "avgRatingString": "4.1",
            "totalRatingsString": "10+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:00:00",
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-oriental-market-vijaya-nagar-indore-601090",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "63657",
            "name": "Little Italy",
            "cloudinaryImageId": "69bb6d02dd30d100339523afe213c5e0",
            "locality": "Brilliant Convention Centre",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹850 for two",
            "cuisines": [
              "Pizzas",
              "Salads",
              "Italian",
              "Mexican",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "600",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
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
                        "description": "Gourmet",
                        "imageId": "newg.png"
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/little-italy-brilliant-convention-centre-vijay-nagar-indore-63657",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "157785",
            "name": "The Good Bowl",
            "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
            "locality": "Vijay Nagar",
            "areaName": "Sheetal Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "7918",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:59:00",
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹110"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-vijay-nagar-sheetal-nagar-indore-157785",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "409708",
            "name": "La Milano Pizzeria",
            "cloudinaryImageId": "doscous22qmcgpr9jnft",
            "locality": "Scheme-54",
            "areaName": "Scheme  54",
            "costForTwo": "₹199 for two",
            "cuisines": [
              "Italian",
              "Pizzas",
              "Pastas",
              "Snacks"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "22533",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "36 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-23 00:30:00",
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
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/la-milano-pizzeria-scheme-54-indore-409708",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "65132",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
            "locality": "54 Scheme",
            "areaName": "Malhar Megamall",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Snacks",
              "Bakery",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4444",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:59:00",
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹110"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-54-scheme-malhar-megamall-indore-65132",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "224034",
            "name": "Maa Ki Rasoi",
            "cloudinaryImageId": "22d76936a42e265be736b160b526b32e",
            "locality": "Mangal city",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Thalis",
              "South Indian",
              "Chinese",
              "Fast Food",
              "Biryani"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "4107",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-23 04:00:00",
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
            "select": true,
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/maa-ki-rasoi-mangal-city-vijay-nagar-indore-224034",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "67385",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Vijay Nagar",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4,
            "parentId": "721",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 4.1,
              "serviceability": "SERVICEABLE",
              "slaString": "41 mins",
              "lastMileTravelString": "4.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-23 03:00:00",
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
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-vijay-nagar-indore-67385",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "235825",
            "name": "Biryani By Kilo",
            "cloudinaryImageId": "bf9be1c6b9d796850f426281559cb2d2",
            "locality": "Vijay Nagar",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹499 for two",
            "cuisines": [
              "Biryani",
              "Hyderabadi",
              "North Indian",
              "Kebabs",
              "Mughlai",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "130",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 57,
              "lastMileTravel": 3.9,
              "serviceability": "SERVICEABLE",
              "slaString": "57 mins",
              "lastMileTravelString": "3.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
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
                        "description": "Gourmet",
                        "imageId": "newg.png"
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
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/biryani-by-kilo-vijay-nagar-indore-235825",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "65131",
            "name": "Behrouz Biryani",
            "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
            "locality": "54 Scheme",
            "areaName": "Vijay Nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Kebabs",
              "Mughlai",
              "Lucknowi",
              "Hyderabadi",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "1803",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/behrouz-biryani-54-scheme-vijay-nagar-indore-65131",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "65134",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "taauzuwv2lpbpn0ik5ds",
            "locality": "Vijay Nagar",
            "areaName": "Sheetal Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Punjabi",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4925",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:59:00",
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
              "subHeader": "AT ₹159"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-vijay-nagar-sheetal-nagar-indore-65134",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "223393",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "upajaowdlvgbeoepabt1",
            "locality": "Sarafa",
            "areaName": "Raj Mohalla",
            "costForTwo": "₹100 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 7.1,
              "serviceability": "SERVICEABLE",
              "slaString": "46 mins",
              "lastMileTravelString": "7.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-22 23:00:00",
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
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
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
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sarafa-raj-mohalla-indore-223393",
            "type": "WEBLINK"
          }
        }
      ];
     */
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCart); 

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const data = await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7611352&lng=75.8750008&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json);
    };

    const {setUserName, loggedInUser} = useContext(UserContext);

    return listOfRestaurants.length === 0 ?(
     <Shimmer /> 
    ):(
      <div className="body">
        <div className="filter flex items-center">
            <div className="search p-4 m-4">
                <input type="text" className="search-box border border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                } } />
                <button className="px-4 py-0.5 m-3 bg-green-300 rounded-md">Search</button>
            </div>

            <button className="filter-btn px-3 py-1 m-10 bg-gray-200 rounded-md" onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                  setListOfRestaurants(filteredList);
            }}>
                Top Rated Restaurants
            </button>

            <label>username: </label>
            <input type="text" className="p-2 border border-black m-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} />
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