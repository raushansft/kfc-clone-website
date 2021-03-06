import React from 'react'
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
import "./Home.css";
import Footer from "./Footer";
import footer_img1 from '../home_asset/footer_img1.JPG'
import footer_img2 from '../home_asset/footer_img2.JPG'
import below_navbar from '../home_asset/below_navbar.JPG'
import slide_img from '../home_asset/slide_img.JPG'
import slide_img1 from '../home_asset/slide_img1.JPG'
import Navbar from "./Navbar";





export default function Home() {

  const [featuresItem, setFeaturesItem] = React.useState([]);
  const [favoriteItem, setFavoriteItem] = React.useState([]);
  const [quickBite, setQuickBite] = React.useState([]);

  const getFeaturesItem = () => {

    fetch(`http://localhost:8080/features`)
      .then((res) => res.json())
      .then((res) => {
        setFeaturesItem(res);
        console.log(res[1].img);
      })
      .catch((err) => {

        setFeaturesItem([]);
      })

  };

  React.useEffect(() => {
    getFeaturesItem();
    // console.log(featuresItem);
  }, []);

  // favorite item
  const getFavoriteItem = () => {

    fetch(`http://localhost:8080/favorites`)
      .then((res) => res.json())
      .then((res) => {
        setFavoriteItem(res);
        console.log(res[1].img);
      })
      .catch((err) => {
        console.log(err);
        setFavoriteItem([]);
      })

  };

  React.useEffect(() => {
    getFavoriteItem();

  }, []);


  // quick bite item


  const getQuickBite = () => {

    fetch(`http://localhost:8080/quickBites`)
      .then((res) => res.json())
      .then((res) => {
        setQuickBite(res);
        console.log(res[1].img);
      })
      .catch((err) => {
        console.log(err);

        setQuickBite([]);
      })

  };

  React.useEffect(() => {
    getQuickBite();

  }, []);








  return (
    <>


      <Navbar />
      <img src={below_navbar} alt="img" />
      <div className='itemcont'>
        <h1>
          FEATURED ITEM
        </h1>

        <div className='featcont'>
          {featuresItem.map(({ id, img, text1, text2, text3 }) => (

            <div key={id} className=" item-container">
              <div className='container'>
                <img className='item-img' src={img} alt="img" />

              </div>
              <div>
                <p className='txt1'>{text1}</p>
                <p className='txt2'>{text2}</p>
                <p className='txt3'>{text3}</p>
              </div>
            </div>
          ))}
        </div>
      <hr />
      </div>

      <div className='itemcont'>
        <h1>Favorite Item</h1>

        <div className='featcont' >
          {favoriteItem.map(({ id, img, text1, text2, text3 }) => (

            <div key={id} className="item-container">
              <div className='container'>
                <img className='item-img' src={img} alt="img" />

              </div>
              <div>
                <p className='txt1'>{text1}</p>
                <p className='txt2'>{text2}</p>
                <p className='txt3'>{text3}</p>
              </div>
            </div>
          ))}
        </div>
      <hr />
      </div>

      <div className='itemcont'>
        <h1>Quick Bite</h1>

        <div className='featcont'>
          {quickBite.map(({ id, img, text1, text2, text3 }) => (

            <div key={id} className="item-container">
              <div className='container'>
                <img className='item-img' src={img} alt="img" />

              </div>
              <div className='item-text'>
                <p className='txt1'>{text1}</p>
                <p className='txt2'>{text2}</p>
                <p className='txt3'>{text3}</p>
              </div>
            </div>
          ))}
        </div>
      <hr />
      </div>


      {/* <img src={slide_img} alt="img" /> */}
      {/* <img src={slide_img1} alt="img" /> */}

      {/* // show data from json server */}

      {/* // show features item  */}







      <img className="footer_image2" src={footer_img2} alt="img"  style={{width:"100%", margin:"auto"}}/>
      {/* <img className="footer_image3" src={footer_img1} alt="img" /> */}
      <Footer className="footer" />
    </>
  )
}
