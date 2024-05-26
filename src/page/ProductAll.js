import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productlist = useSelector((state)=>state.product.productlist)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts=()=>{
    let searchQuery = query.get("q") || "";
    console.log("쿼리 값은?",searchQuery);
    dispatch(productAction.getProducts(searchQuery));
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