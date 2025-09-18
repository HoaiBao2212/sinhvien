import "./JobMainPage.css";
import Header from "../components/Header";
import SearchBar from "../components/Searchbar";
import CardGrid from "../components/CardGrid";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


function JobMainPage() {
  return (
    <div className="JobMainPage">
      <div className="header-container">
      <Header />
      </div>
      <div className="main">
        <div className="CarGrid-Searchbar">
          
          <SearchBar />
          <CardGrid />
        </div>
        <div className="Sidebar">
        <Sidebar />
        </div>
        
      </div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
  );
}

export default JobMainPage;
