import React from 'react'
import "./menu.css"
function Menu() {

    
    const [favoriteItem, setFavoriteItem] = React.useState([]);

    const getFavoriteItem = () => {

        fetch(`http://localhost:3030/products`)
            .then((res) => res.json())
            .then((res) => {
                setFavoriteItem(res);
                console.log(res)
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
    return (
           
       <div className='main_container'>
         <div>
        <div className="Filterlist">
        <h1>KFC® MENU</h1>
        <p>Jack Harlow's Meal</p>
        <p>Featured</p>
        <p>Buckets</p>
        <p>Tenders</p>
        <p>Sandwiches</p>
        <p>Fried Chicken</p>
        <p>Pot Pies & Bowls</p>
        <p>A La Carte</p>
        <p>Sides</p>
        <p>Sauces</p>
        <p></p>
        </div>
        </div>

        <div className='product_container'>
            {favoriteItem.map(({ id, img, text1, text2, text3 }) => (

                <div key={id} className="item-container">
                    <div className='container'>
                        <div><img className='item-img' src={img} alt="img" /></div>
                        <div className='para_Container'>
                            <p className='txt1'>{text1}</p>
                            <p className='txt2'>{text2}</p>
                            <p className='txt3'>{text3}</p>
                        </div>
                    </div>
                   
                </div>
            ))}
        </div>

       </div>
    )
}

export default Menu