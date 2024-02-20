import React, { useEffect, useState } from 'react'

import response from './../data.json'



const JsonData = () => {

    const [products,setProducts] = useState([])

    
    // const resposeKeyData = Object.keys(response.data.contents.contents)
    // // console.log(resposeKeyData)

    // const keyname = resposeKeyData[1]

    // const respnseData = response

    // console.log(respnseData.data.contents.contents[keyname]);

    useEffect(()=>{
        setProducts(response.products)
    },[products])
    console.log(products)

    return (
    <div>
        <h1>All Products</h1>
        <ul>
        {
            products.map((pro,index)=>(
                <li><h6>Title: {pro.title}</h6>
                <h6>Price: {pro.price} </h6>
                <h6>Description: {pro.description}</h6>
                <h6>Category: {pro.category}</h6>
               </li>
            ))
        }
        </ul>
       
    </div>
  )
}

export default JsonData