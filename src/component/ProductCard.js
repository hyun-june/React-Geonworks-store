import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="card-section">
        <img src={item?.img}/>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true ? "NEW" : ""}</div>
    </div>
  )
}

export default ProductCard