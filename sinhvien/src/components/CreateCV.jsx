import React,{useRef} from "react";
import "./CreateCV.css";
import { useNavigate } from "react-router-dom";
export default function CreateCV({ onSubmit }) {
  const navigate =useNavigate(); 
  const avatarRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const experience = form.experience.value.trim();
    const skills = form.skills.value.trim();
    const avatar = avatarRef.current?.files[0];

    if (!fullname || !email || !phone || !experience || !skills) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    alert("CV đã được tạo!");
    if (onSubmit) {
      onSubmit(e);
    }
    navigate("/my-cv");
  };

  return (
    <main className="cv-main">
      <h2>Tạo CV của bạn</h2>
      <form className="cv-form" onSubmit={handleSubmit}>
        <label>
          Ảnh đại diện:
          <input type="file" name="avatar" accept="image/*" ref={avatarRef} />
        </label>
        <label>
          Họ và tên:
          <input type="text" name="fullname" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Số điện thoại:
          <input type="tel" name="phone" />
        </label>
        <label>
          Kinh nghiệm:
          <textarea name="experience" rows={4} />
        </label>
        <label>
          Kỹ năng:
          <textarea name="skills" rows={3} />
        </label>
  <button type="submit">Tạo CV</button>
      </form>
    </main>
  );
}
