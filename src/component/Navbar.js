import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menulist = ["All Products","KEYBOARD KIT","PLATE","PCB","VENOM","SWITCHES","KEYCAP","FOAM","TOOLS","ETC","묻고 답하기","더보기"];
  const navigate = useNavigate();
  const goToLogin =()=>{
    navigate("/login");
  };

  const goToMainPage = () => {
    navigate("/");
  };

  const search=(event)=>{
    if(event.key ==="Enter"){
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      <div className="nav-section" onClick={goToMainPage}>
        <h1>GEONWORKS</h1>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menulist.map((menu,index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="검색어를 입력해주세요." onKeyPress={(event)=>search(event)} />
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;