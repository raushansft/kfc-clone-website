import React, { useEffect, useState } from 'react'
import "./product.css"
const Products = () => {

    const [data, setData] = useState([]);
  const Product= async () =>{
    
      try{
        const res = await fetch("http://localhost:8080/products")
        const productsData = await res.json();
        console.log(productsData);
        setData(productsData);
        console.log(productsData)
        // console.log(productsData.features[0]);
        // console.log(productsData.features[0].title1)
      }catch(err){
          console.log(err);
      }
  }

  useEffect(()=>{
    Product();
  },[])
 
  return (
    <div>
        <div className="productsContainer">
            {/* <p>{data.img}</p> */}
            <p>{data.name}</p>
            <p>{data.calories}</p>
            <p>{data.location}</p>
        </div>
    </div>
  )
}

export default Products