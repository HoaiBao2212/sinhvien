import Header from "../components/Header";
import Footer from "../components/Footer";
import JobDetail from "../components/JobDetail";
import "./JobDetailPage.css";

export default function JobDetailPage() {
  return (
    <div className="job-detail-page">
      <div className="header-container">
      <Header />
      </div>
      <div className="main-jobdetail">
      <JobDetail />
      </div>
      
      <div className="footer">
      <Footer />
      </div>
      
    </div>
  );
}
