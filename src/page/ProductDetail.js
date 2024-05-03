import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import DetailDropdown from '../component/DetailDropdown';
import DetailButton from '../component/DetailButton';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hyun-june/React-Geonworks-store/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
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
