import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [productData, setProductData] = useState({})
  // let { productId } = useParams();
  let params = useParams()
  let id = params.productId

  console.log(useParams())

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/'+id)
    .then((res) => {
        setProductData(res.data)
    })
    .catch(err => {
        console.log("Some error")
    })
  }, [])
  return (
    <>
        <img src = {productData.image} />
        <p>{productData.title}</p>
        <p>${productData.price}</p>
    </>
  )
}

export default ProductDetails