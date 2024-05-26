import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import DetailDropdown from '../component/DetailDropdown';
import DetailButton from '../component/DetailButton';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();

  const getProductDetail =() => {
    dispatch(productAction.getProductDetail(id));
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row className="detail-container">
        <Col md={4} className="product-img">
          <img className="detail-img" src={product?.img} alt="Product"/>
        </Col>
        <Col md={5} className="detail-page">
          <div className="detail-title">{product?.title}</div>
          <div className="detail-price">{product?.price}</div>
          <DetailDropdown />
          <Button className="buy-btn" variant="success">구매하기</Button>
          <DetailButton />
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;
