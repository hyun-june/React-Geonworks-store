import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faArrowRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
  const menulist = ["All Products","KEYBOARD KIT","PLATE","PCB","VENOM","SWITCHES","KEYCAP","FOAM","TOOLS","ETC","묻고 답하기","더보기"];
  const navigate = useNavigate();
  let [width, setWidth] = useState(0);
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

  const handleLogout = () => {
    setAuthenticate(false);
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menulist.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(150)} />
        </div>
      </div>
      {authenticate ? (
          <div className="login-button" onClick={()=> setAuthenticate(false)}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <div>&nbsp;로그아웃</div>
          </div>) : (
            <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>&nbsp;로그인</div>
          </div>
          )}
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