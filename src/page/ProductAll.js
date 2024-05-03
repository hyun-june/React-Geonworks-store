import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productlist,setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts=async()=>{
    let searchQuery = query.get("q") || "";
    console.log("쿼리",searchQuery)
    let url= `https://my-json-server.typicode.com/hyun-june/React-Geonworks-store/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  },[query]);

  return (
    <div>
      <Container>
      <Row>
        {productlist.slice(0,3).map((menu,index)=>(
           <Col lg={4} key={index}>
            <ProductCard item={menu}/> 
            </Col>
        ))}
        {productlist.slice(3,6).map((menu,index)=>(
           <Col lg={4} key={index}>
            <ProductCard item={menu}/> 
            </Col>
        ))}
        {productlist.slice(6).map((menu,index)=>(
           <Col lg={3} key={index}>
            <ProductCard item={menu}/> 
            </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll