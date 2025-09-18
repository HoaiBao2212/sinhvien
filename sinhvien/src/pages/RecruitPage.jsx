import "./RecruitPage.css";
import Header from "../components/Header";
import JobSection from "../components/JobSection";
import Footer from "../components/Footer";

function RecruitPage() {
  return (
    <div className="recruitpage">
      <Header />
      <div className="main-recruitpage">
      <JobSection />
      </div>
      <Footer />
    </div>
  );
}

export default RecruitPage;
