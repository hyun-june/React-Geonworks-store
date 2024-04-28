import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const handleTabClick = (content) => {
    console.log(content); // 콘솔에 해당 탭의 내용을 출력
  };

  return (
    <div className="login-section">
      <h1>GEONWORKS</h1>
      <div className="login-box">
        <div className="login-tabs">
          <div onClick={() => handleTabClick("ID로그인")}>ID로그인</div>
          <div onClick={() => handleTabClick("일회용 번호")}>일회용 번호</div>
          <div onClick={() => handleTabClick("QR코드")}>QR코드</div>
        </div>
        <div className="login-input">
          <FontAwesomeIcon icon={faUser} className="input-idicon" />
          <input type="text" placeholder="아이디" id="id-input" />
          <FontAwesomeIcon icon={faLock} className="input-pwicon" />
          <input type="password" placeholder="비밀번호" id="password-input" />
        </div>
        <div className="auto-login">
          <input type="button" id="auto-btn" />
          <div>로그인 상태 유지</div>
        </div>
        <div className="btn-area">
          <Button variant="primary" size="lg" id="login-btn">
            로그인
          </Button>
        </div>
      </div>
      <ul className="login-list">
          <li>비밀번호 찾기</li>
          <li>아이디 찾기</li>
          <li>회원 가입</li>
        </ul>
        <Link to="https://codingnoona.thinkific.com/" className="img-box">
        <img src="" alt="" />
      </Link>
    </div>
  );
};

export default Login;
