
import "./CV.css";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar/avatar.jpg";
export default function CV({ }) {
    // Data CV
    const cvData = {
    fullname: "Phan Hoài Bão",
    email: "baobao@gmail.com",
    phone: "0123456789",
    experience: "1 năm làm phục vụ quán cafe, 6 tháng bán hàng tại cửa hàng tiện lợi.",
    skills: "Sử dụng máy tính cơ bản.",
    avatar: avatar
    };

    const navigate = useNavigate();
  return (
    <main className="cv-main">
      <h2>CV của bạn</h2>
      <div className="cv-info">
        <img
          src={cvData.avatar}
          alt="Avatar"
          className="cv-avatar"

        />
        <div className="cv-info-details">
        <p><strong>Họ và tên:</strong> {cvData.fullname}</p>
        <p><strong>Email:</strong> {cvData.email}</p>
        <p><strong>Số điện thoại:</strong> {cvData.phone}</p>
        <p><strong>Kinh nghiệm:</strong> {cvData.experience}</p>
        <p><strong>Kỹ năng:</strong> {cvData.skills}</p>
        </div>
      </div>
    
      <button className="floating-create-cv" onClick={() => navigate("/create-cv") }>
        Tạo mới CV
      </button>
    </main>
  );
}
