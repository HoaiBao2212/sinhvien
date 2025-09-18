import "./Workingpage.css";
import Header from "../components/Header";
import SearchBar from "../components/Searchbar";
import JobSection from "../components/JobSection";
import Footer from "../components/Footer";

function Workingpage() {
  return (
    <div className="workingpage">
      <div className="Header-container">
          <Header />
        </div>
      <div className="main-workingpage">
        <div className="Searchbar">
        <SearchBar />
        </div>
        
        <JobSection />
      
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Workingpage;
