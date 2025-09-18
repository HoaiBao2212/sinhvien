import "./Searchbar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Tìm kiếm" />
      <button className="search-btn">🔍</button>
    </div>
  );
}
