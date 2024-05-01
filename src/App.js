import {useEffect, useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 3-1. 상품 상세페이지 눌렀을 때, 로그인이 안 된 경우에는 로그인 페이지가 먼저 나온다.
// 4. 로그인이 된 경우에는 상품 상세 페이지가 나온다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 5-1. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 나온다.
// 6. 상품을 검색할 수 있다.
function App() {
  const [authenticate,setAuthenticate]=useState(false) //true = 로그인 / false = 비로그인
  const location = useLocation();
  const isLoginPage = location.pathname ==="/login";

  useEffect(()=>{
    console.log(authenticate)
  },[authenticate])

  return (
    <div>
     {!isLoginPage && <Navbar />}

     <Routes>
      <Route path="/" element={<ProductAll/>} />
      <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
      <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      {/* <Route path="/product/:id" element={authenticate ? <ProductDetail/>:<Login />} /> */}
     </Routes>
    </div>
  );
}

export default App;
