import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Tin Tức </h2>
      <ul>
        {Array(6).fill("Tin tức nóng").map((item, i) => (
          <a href="">
          <li key={i}>{item}</li>
          </a>
        ))}
      </ul>
    </aside>
  );
}
