import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateCV from "../components/CreateCV";
import "./CreateCVPage.css";
export default function CreateCVPage() {

  return (
    <div className="create-cv-page">
      <Header />
      <CreateCV />
      <Footer />
    </div>
  );
}
