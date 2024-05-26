import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {Container, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = () => {
  const [id,setId]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTabClick = (content) => {
  };
  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id,password));
    navigate("/");
  };

  const goToMainPage = () => {
    navigate("/");
  };


  return (
    
    <Container className="login-section">
      <h1 onClick={goToMainPage}>GEONWORKS</h1>
      <Form className="login-box" onSubmit={(event)=>loginUser(event)}>
        <div className="login-tabs">
          <div onClick={() => handleTabClick("ID로그인")}>ID로그인</div>
          <div onClick={() => handleTabClick("일회용 번호")}>일회용 번호</div>
          <div onClick={() => handleTabClick("QR코드")}>QR코드</div>
        </div>
        <div className="login-input">
          <FontAwesomeIcon icon={faUser} className="input-idicon" />
          <input type="text" placeholder="아이디" id="id-input" onChange={(event)=>setId(event.target.value)} />
          <FontAwesomeIcon icon={faLock} className="input-pwicon" />
          <input type="password" placeholder="비밀번호" id="password-input" onChange={(event)=>setPassword(event.target.value)} />
        </div>
        <div className="auto-login">
          <input type="button" id="auto-btn" />
          <div>로그인 상태 유지</div>
        </div>
        <div className="btn-area">
          <Button variant="primary" size="lg" id="login-btn" type="submit">
            로그인
          </Button>
        </div>
      </Form>
      <ul className="login-list">
          <li className="login-menu">비밀번호 찾기</li>
          <li className="login-menu">아이디 찾기</li>
          <li>회원 가입</li>
        </ul>
        <Link to="https://codingnoona.thinkific.com/" className="img-box" target="_blank">
        <img src="" alt="" />
      </Link>
    </Container>
  );
};

export default Login;