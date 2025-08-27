import React from "react";
import "./style/JobCard.css";
import { FaUserAlt, FaBuilding } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

const JobCard = ({ logo, title, posted, exp, type, salary, description }) => {
  return (
    <div className="job-card">
      {/* Header */}
      <div className="job-card-header">
        <img src={logo} alt={title} className="job-logo" />
        <span className="posted-tag">{posted}</span>
      </div>

      {/* Title */}
      <h3 className="job-title">{title}</h3>

      {/* Meta info */}
      <div className="job-meta">
        <span><FaUserAlt /> {exp}</span>
        <span><FaBuilding /> {type}</span>
        <span><FaIndianRupeeSign /> {salary}</span>
      </div>

      {/* Description */}
      <ul className="job-desc">
        {description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;

