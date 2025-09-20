import Header from "../components/Header";
import Footer from "../components/Footer";
import Support from "../components/Support";
import "./SupportPage.css";

export default function SupportPage() {
  return (
    <div className="support-page">
      <Header />
      <Support />
      <Footer className="footer" />
    </div>
  );
}
