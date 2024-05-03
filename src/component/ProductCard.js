import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail=()=>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div className="card-section" onClick={showDetail}>
        <img src={item?.img} alt=""/>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true ? "NEW" : ""}</div>
    </div>
  )
}

export default ProductCard