import "./JobSection.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchJobs } from "../api/jobApi";


export default function JobSection() {

  const navigate = useNavigate();

    const [groupedJobs, setGroupedJobs] = useState({});

    useEffect(() => {
      fetchJobs().then(data => {
        // Nhóm job theo idcompany
        const groups = {};
        [1,2].forEach(id => {
          groups[id] = data.filter(job => job.idcompany === id);
        });
        setGroupedJobs(groups);
      });
    }, []);
    
  return (
    <section className="job-section">
      
      {[1,2].map(id => (
        groupedJobs[id] && groupedJobs[id].length > 0 && (
          <div key={id}  className="job-section-group">
            <div className="employer-info">
              <p>
                <strong>Nhà tuyển dụng: {groupedJobs[id][0].company}</strong> <br />
                Địa điểm: {groupedJobs[id][0].location}
              </p>
              <div className="rating">⭐ ⭐ ⭐ ☆ ☆</div>
            </div>
            <div className="job-grid">
              {groupedJobs[id].map(job => (
                <div className="job-card" key={job.id}>
                  <img src={job.img} alt="job" />
                  <div className="job-text">
                    <p>{job.title}</p>
                    <p>{job.date}</p>
                    <p>{job.time}</p>
                  </div>
                  <button className="apply-btn" onClick={()=> navigate(`/job/${job.id}`)}>Xem thêm ➜</button>
                </div>
              ))}
            </div>
           
          </div>
        )
      ))}
    </section>
  );
}
