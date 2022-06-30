import React , {useState,useEffect} from 'react'
import {GoLocation} from 'react-icons/go';
import {RiArrowDropDownLine} from 'react-icons/ri';
import "./Home.css";
import Footer from "./Footer";





export default function Home() {

const [featuresItem,setFeaturesItem]=useState([]);
const [favoriteItem,setFavoriteItem]=useState([]);
const [quickBite,setQuickBite]=useState([]);

const getFeaturesItem=()=>{
  fetch('http://localhost:8080/features').then((res)=>{
   
    return res.json();
  }).then((res)=>{
    setFeaturesItem(res);
    // console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
};

const getFavoriteItem=()=>{
  fetch('http://localhost:8080/favorites').then((res)=>{
     return res.json();
  }).then((res)=>{
    setFavoriteItem(res);
  })
};

const getQuickBite=()=>{
  fetch('http://localhost:8080/quickBites').then((res)=>{
    return res.json();
  }).then((res)=>{
    setQuickBite(res);
  })
};

useEffect(()=>{
  getFeaturesItem();
  console.log(featuresItem,favoriteItem,quickBite);
  getFavoriteItem();
  getQuickBite();
  
},[]);

  return (
    <>


    <div>
    {/* Section -1 nav bar  */}
    <div className="section-1">

    </div>

    {/* section -2  */}

    <div className="section-2">
    <p><GoLocation/>  </p> 
      <p>Start an Order for Pickup or Delivery </p>
      <p> <RiArrowDropDownLine/></p>

    </div>

    {/* section -3  */}
    <div className="section-3">
      <p>INTRODUCIN' KFC FINGER SPORKS!</p>
      <p>PUT THE FUN IN FAMILY DINNER</p>
      <p>Get 2 KFC Finger Sporks when iickin' good won't last long.</p>

      <button>Order Now</button>
    </div>

    {/* section-4  */}

    <div className="section-4">
      <p>
      To qualify for 2 free KFC Finger Sporks, you must purchase a Sides Lovers Meal between June 21 and July 12, at participating locations while supplies last. Customer responsible for all taxes and fees. Cannot be combined with other offers. No cash value. Non-transferable. Subject to cancellation at any time.
      </p>

    </div>

    {/* section 41  */}
    <div className='section-411'>
      <p>FINGER LICKIN' GOOD IS NOW JUST A FEW CLICK AWAY</p>
      <button>Start Order</button>
    </div>

    {/* section -5 featured item  */}
    <div className='section-5'>
      <p>FEATURED ITEMS</p>

    </div>



    {/* section -6 favorite item  */}
    <div className='section-6'>

    </div>


    {/* section -7 quick bites  */}
    <div className='section-7'>
      <p>QUICK BITES</p>
      {
        quickBite.map(({id,img,text1,text2,text3})=>{
          <div key={id}>
            <img src={img} alt="image" />
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          </div>
        })

      }

    </div>


    {/* section -8 use ss image  */}
    

    {/* section -9 footer image  */}
    <Footer/>



    </div>






   

    
      
    </>
  )
}
