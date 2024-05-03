import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';

const DetailButton = () => {
  return (
    <div className="button-box">
      <Button className="button-list" variant="outline-secondary">
        <FontAwesomeIcon icon={faCommentDots} /> 톡톡문의</Button>{" "}
      <Button className="button-list" variant="outline-secondary">
      <FontAwesomeIcon icon={faHeart} /> 찜하기</Button>{" "}
      <Button className="button-list" variant="outline-secondary">
      <FontAwesomeIcon icon={faBasketShopping} /> 장바구니</Button>{" "}
    </div>
  );
};

export default DetailButton;
