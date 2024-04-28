import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
  const [productlist,setProductList] = useState([]);
  const getProducts=async()=>{
    let url= 'http://localhost:5000/products/';
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
      <Container>
      <Row>
        {productlist.slice(0,3).map(menu=>(
           <Col lg={4}>
            <ProductCard item={menu}/> 
            </Col>
        ))}
        {productlist.slice(3,6).map(menu=>(
           <Col lg={4}>
            <ProductCard item={menu}/> 
            </Col>
        ))}
        {productlist.slice(6).map(menu=>(
           <Col lg={3}>
            <ProductCard item={menu}/> 
            </Col>
        ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll