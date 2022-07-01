import React, { useState, useEffect } from 'react'
import redLine from "../../images/redLine.svg"
import styled from 'styled-components'
import search from "../../images/search.svg"
import setting from "../../images/setting.svg"

import RestaurantCard from './RestaurantCard'
let data;


const FindSearchPartStyled = styled.div`
 text-align: center;
.findMapPart{
    padding-top:100px;
    padding-bottom:5px;
    height:100vh;
    width:98vw;
    display:grid;
    grid-template-columns:1fr 1fr;
}
.findMapSearch{
    line-height:"1px"
}
.mapDisplaySearch{
}
.redLineCss{
    margin-top:0px;
    height:30px;
    width:250px;
}
.mapIframe{
    position: -webkit-sticky;
    position: sticky;
    width:50vw;
    height:100vh;
}
.inputSearchForLocation{
    width: 70%;
    border:none;
    font-size: 18px;
    text-decoration: italic;
    height:30px;
    outline: none;
}
.inputSearchForLocationDiv{
    position:sticky;
    border-bottom:2px solid red;
    flex-direction:row;
    align-items:center;
    width:60%;
    margin:auto;
    text-decoration:italic;
}
.useLocation{
    color:#db343b;
    font-size:18px;
    font-weight:500;
    cursor:pointer;
}
.useLocation:hover{
    text-decoration:none;
}
.browseOurDirectory{
    font-size:17px;
}
.browseOurDirectory1:hover{
    text-decoration:none;
    cursor:pointer;
}
.browseOurDirectoryAddres{
    font-size:17px;
    width:80%;
    margin:auto;
}
.restaurantCard{
    height:auto;
    overflow:scroll;
    margin:10px;
    border:5px solid red;
    
}
/* Hide scrollbar for Chrome, Safari and Opera */
// .restaurantCard::-webkit-scrollbar {
//   display: none;
// }
/* Hide scrollbar for IE, Edge and Firefox */
.restaurantCard {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.inputSearchForLocationImg1{
    height:27px;
}
.inputSearchForLocationImg2{
    height:25px;
}
@media all and (min-width:765px) and (max-width:1595px) {
.findMapSearch{
    overflow:scroll;
}
.restaurantCard{
    height:45vh;
    overflow:none;
    margin:10px;
    
}
/* Hide scrollbar for Chrome, Safari and Opera */
.findMapSearch::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.findMapSearch {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
}
@media all and (min-width:0px) and (max-width:765px) {
.findMapPart{
    padding-top:100px;
    padding-bottom:5px;
    height:fit-content;
    width:98vw;
    display:block;
    
}
.mapIframe{
    position: -webkit-sticky;
    width:95vw;
    height:100vh;
    margin:10px;
    justify-content:center;
}
}
@media all and (min-width:760px) and (max-width:1100px) {
    
.inputSearchForLocation{
    width: 70%;
    height:fit-content;
}
.inputSearchForLocationDiv{
    width:fit-content;
}
.inputSearchForLocationImg1{
    height:23px;
}
.inputSearchForLocationImg2{
   
    height:23px;
}
}
@media all and (min-width:1100px) and (max-width:1230px) {
.inputSearchForLocation{
    width: 50%;
    height:fit-content;
}
.inputSearchForLocationDiv{
    width:fit-content;
}
.inputSearchForLocationImg1{
    height:23px;
}
.inputSearchForLocationImg2{
    
    height:23px;
}
}
@media all and (min-width:0px) and (max-width:415px) {
.inputSearchForLocation{
    width: 70%;
    height:fit-content;
}
.inputSearchForLocationDiv{
    width:fit-content;
}
.inputSearchForLocationImg1{
    height:15px;
}
.inputSearchForLocationImg2{
    
    height:15px;
}
}

@media all and (min-width:0px) and (max-width:1100px) {
.findMapPart{
    padding-top:100px;
}
}
`

const FindKFC = () => {

    let [location, setLocation] = useState([])
    const[val,setVal] = useState("");
    const[city,setCity]=useState("patna")


     
    const handleVal=(val)=>{ 
      setCity(val);
        
    }
    useEffect(() => {
        (async function loadData(){

            try {
                const res=await fetch(`http://localhost:9876/${city}`)
                  data= await res.json();
                
                  setLocation([...data])
                  
            } catch (error) {
                console.log(error);
            }
            
            })();
    },[city])

    
    

    const [textL, setTextL] = useState("Patna")
    const [address, setAddress] = useState("patna")
   



    

    
    const out = (lat, lng) => {
        fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.456518217705258731c8c7089e3a45d0&lat=${lat}&lon=${lng}&format=json`)
            .then((e) => e.json())
            .then((d) => {
                setAddress(d.display_name);
                setTextL(d)
            
                
    })
    }
    

    const handleLocation = (el) => { setTextL(el)  ;
        setAddress(el)
        
    };

  
    const findLocat =(event) => { 
        event.preventDefault();
       
       };
    const UseMyGeoLocation = () => { navigator.geolocation.getCurrentPosition(function (position) { out(position.coords.latitude, position.coords.longitude) }) };

    return (
        <FindSearchPartStyled>
            <div className='findMapPart'>
                <div className='findMapSearch'>
                    <img className="redLineCss" src={redLine} alt="" />
                    <p style={{ letterSpacing: "1px", fontFamily: "fantasy", fontWeight: "100", fontSize: "32px" }}>Find a KFC Location</p>
                    <p style={{ letterSpacing: "1px", fontFamily: "sans-serif,Roboto", fontWeight: "600", fontSize: "15px" }}>SEARCH BY CITY AND STATE OR ZIP CODE</p>
                    <div className='inputSearchForLocationDiv'>
                        <form onSubmit={findLocat}  style={{display:"flex"}} >
                            <input className='inputSearchForLocation' type="text" placeholder="Louisville, KY" onChange={(e) =>{ handleLocation(e.target.value);setVal(e.target.value)}} />
                            <img className='inputSearchForLocationImg1' style={{ padding: "0vw 1vw", cursor: "pointer" }} src={search} onClick={()=>{handleLocation(val);handleVal(val)}} alt="" />
                            <img className='inputSearchForLocationImg2' style={{ padding: "0vw 1vw", cursor: "pointer" }} src={setting} alt="" />
                        </form>
                    </div>
                    <div> <br/>
                        <u className="useLocation" onClick={UseMyGeoLocation}>USE MY LOCATION</u>
                    </div>

                    <div className="browseOurDirectory"> <br />
                        {address&&location.length!==0? (
                            <>
                            
                            <div className="browseOurDirectoryAddres"><b>Current Location:</b> {address}</div>
                            <div className='restaurantCard'>                                
                                {   
                                // location.map((e)=>{ return (<><h1>{e.title}</h1></>) })
                                   location.map((e)=><RestaurantCard key={e.contact} {...e}/>)
                                }
                            </div>
                            </>
                        ) : (
                            <>
                                Use our locator to find a location near you or <u className="browseOurDirectory1">browse our directory. </u>
                            </>
                        )}
                    </div>
                </div>
                <div className='mapDisplaySearch'>
                    <iframe
                        className='mapIframe'
                        title="Map of City"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAq15HbfCRMW7RqNb5LUNyOLyfzpYI0wl4&q=${textL}`}>

                    </iframe>

                </div>
            </div>
        </FindSearchPartStyled>
    )
}

export default FindKFC