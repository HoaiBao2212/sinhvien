
import "./CV.css";
import { useNavigate } from "react-router-dom";
export default function CV({ }) {
    // Data CV
    const cvData = {
    fullname: "Phan Hoài Bão",
    email: "baobao@gmail.com",
    phone: "0123456789",
    experience: "1 năm làm phục vụ quán cafe, 6 tháng bán hàng tại cửa hàng tiện lợi.",
    skills: "Chăm chỉ, sử dụng máy tính cơ bản."
    };

    const navigate = useNavigate();
  return (
    <main className="cv-main">
      <h2>CV của bạn</h2>
      <div className="cv-info">
        <p><strong>Họ và tên:</strong> {cvData.fullname}</p>
        <p><strong>Email:</strong> {cvData.email}</p>
        <p><strong>Số điện thoại:</strong> {cvData.phone}</p>
        <p><strong>Kinh nghiệm:</strong> {cvData.experience}</p>
        <p><strong>Kỹ năng:</strong> {cvData.skills}</p>
      </div>
      <button className="edit-cv-btn" onClick={() => navigate("/create-cv") }>Tạo mới CV</button>
    </main>
  );
}
