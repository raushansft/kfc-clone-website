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
        // console.log(favoriteItem)

    }, []);
    return (

        <div className='main_container'>
            <div>
                <div className="Filterlist">
                    <h1>KFC® MENU</h1>
                    <p> <a href="">Jack Harlow's Meal</a></p>
                    <p><a href="">Featured</a></p>
                    <p><a href="">Buckets</a></p>
                    <p><a href="">Tenders</a></p>
                    <p><a href="">Sandwiches</a></p>
                    <p><a href="">Fried Chicken</a></p>
                    <p><a href="">Pot Pies & Bowls</a></p>
                    <p><a href="">A La Carte</a></p>
                    <p><a href="">Sides</a></p>
                    <p><a href="">Sauces</a></p>
                    <p></p>
                </div>
            </div>

            <div className='product_container'>
                {favoriteItem.map(({ id, img, text1, text2, location  }) => (

                    <div key={id} className="item-container">
                        <div className='container'>
                            <div>
                            <img className='item-img' src={img} alt="img" />
                            </div>
                            <div className='para_Container'>
                                <p className='txt1'>{text1}</p>
                                <p className='txt2'>{text2}</p>
                                <p className='txt3'>{location}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Menu