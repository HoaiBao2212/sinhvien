import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CV from "../components/CV";
import "./MyCVPage.css";

export default function MyCVPage() {
  
  

  return (
    <div className="my-cv-page">
      <Header />
      <CV />
      
      <Footer />
    </div>
  );


}
