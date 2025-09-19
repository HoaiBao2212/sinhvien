
import "./JobDetail.css";
import { fetchJobDetail } from "../api/jobApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);


  useEffect(() => {
    fetchJobDetail(Number(id)).then(data => setJob(data));
  }, [id]);
  
  if (job === undefined) return <div>Không tìm thấy công việc!</div>;
  if (job === null) return <div>Đang tải...</div>;
  
  const handleApply = () => {
    alert("Bạn đã đăng ký thành công!");
  };

  return (
    <div className="job-detail">
      <div className="job-detail-container">
        <div className="job-image">
          <img src={job.img } alt="logo" />
        </div>

        <div className="job-info">
          <p><strong>Nhà tuyển dụng:</strong> {job.company}</p>
          <p><strong>Địa điểm:</strong> {job.location}</p>
          <p><strong>Vị trí:</strong> {job.title}</p>
          <p><strong>Thời gian:</strong> {job.date} : {job.time}</p>
          <p><strong>Mức lương:</strong> {job.salary}</p>
          <p><strong>Mô tả công việc:</strong> {job.description}</p>
          <p><strong>Tình trạng:</strong> Đang tuyển</p>
          <button className="apply-btn" onClick={handleApply}>Đăng ký</button>
        </div>
      </div>
    </div>
  );
}
