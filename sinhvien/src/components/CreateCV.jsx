import React from "react";
import "./CreateCV.css";

export default function CreateCV({ onSubmit }) {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("CV đã được tạo!");
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <main className="cv-main">
      <h2>Tạo CV của bạn</h2>
      <form className="cv-form" onSubmit={handleSubmit}>
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
