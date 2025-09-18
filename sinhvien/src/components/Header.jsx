import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  return (
    <header className="header">
      
      <a href="" onClick={()=> navigate("/")}><h1 className="logo" >Sinhvien+</h1></a>
      
      <div className="dropdown">
        <button className="dropdown-btn" onClick={() => setOpen(!open)}>
          <div className="dropdown">☰</div>
        </button>

        {open && (
          <div className="dropdown-menu">
            <p className="dropdown-component">Xin chào</p>
            <ul>
              
              <li  onClick={()=> navigate("/work")}>💼 Việc làm</li>
             
              
              <li onClick={()=> navigate("/my-cv")}>📄 Tạo CV</li>
              <li onClick={()=> navigate("/support")}>🎧 Hỗ trợ</li>
              <li>⚙️ Cài đặt</li>
              <li>↩️ Đăng xuất</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
