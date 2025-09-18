import React from "react";
import "./Support.css";

export default function Support() {
  return (
    <main className="support-main">
      <h2>Hỗ trợ &amp; Liên hệ</h2>
      <div className="support-info">
        <p>Nếu bạn cần hỗ trợ hoặc có thắc mắc về hệ thống, vui lòng liên hệ:</p>
        <ul>
          <li>Email: <a href="">support@vieclamthem.com</a></li>
          <li>Hotline: <a href="">0123 456 789</a></li>
          <li>Facebook: <a href="" target="_blank" rel="noopener noreferrer">facebook.com/vieclamthem</a></li>
        </ul>
        <p>Hoặc gửi phản hồi trực tiếp qua form bên dưới:</p>
        <form className="support-form">
          <label>
            Nội dung hỗ trợ:
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit">Gửi hỗ trợ</button>
        </form>
      </div>
    </main>
  );
}
