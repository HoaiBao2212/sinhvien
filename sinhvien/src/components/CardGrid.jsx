import "./CardGrid.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobApi";


export default function CardGrid() {
  const[jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(data => setJobs(data));
  },[]);

  // chuyển trang
  const navigate = useNavigate();
  return (
    <div className="card-grid">
      {jobs.map((item) => (
        <div
          key={item.id}
          className="card"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/job/${item.id}`)}
        >
          <img src={item.imgcompany} alt="company" />
          <p>{item.title}</p>
          <span>{item.location}</span>
        </div>
      ))}
    </div>
  );
}
