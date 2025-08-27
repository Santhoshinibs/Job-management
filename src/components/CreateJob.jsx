import React from "react";
import "./style/CreateJob.css";
import SaveIcon from "../assets/Vector-save.png"; 
import vector from "../assets/vector.png"; // go one folder up

const CreateJob = () => {
  return (
    <div className="create-job-container">
      <h2 className="create-job-title">Create Job Opening</h2>
      <form>
        <div className="form-grid">
          {/* Job Title */}
          <div className="form-group">
            <label>Job Title</label>
            <input type="text" placeholder="Full Stack Developer" />
          </div>

          {/* Company Name */}
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Amazon, Microsoft, Swiggy" />
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Location</label>
            <select>
              <option>Choose Preferred Location</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </div>

          {/* Job Type */}
          <div className="form-group">
            <label>Job Type</label>
            <select>
              <option>FullTime</option>
              <option>PartTime</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Salary Range */}
         {/* Salary Range */}
<div className="form-group">
  <label>Salary Range</label>
  <div className="salary-range-inputs">
    <div className="input-with-icon">
      <img src={vector} alt="sort" className="vector-icon" />
      <span className="rupee-symbol">₹</span>
      <input type="number" placeholder="0" />
    </div>
    <div className="input-with-icon">
      <img src={vector} alt="sort" className="vector-icon" />
      <span className="rupee-symbol">₹</span>
      <input type="number" placeholder="12,00,000" />
    </div>
  </div>
</div>

          {/* Application Deadline */}
          <div className="form-group">
            <label>Application Deadline</label>
            <input type="date" />
          </div>

          {/* Job Description */}
          <div className="form-group textarea-group">
            <label>Job Description</label>
            <textarea placeholder="Please share a description to let the candidate know more about the job role"></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button type="button" className="save-draft">
  Save Draft <img src={SaveIcon} alt="Save Icon" />
</button>

          <button type="submit" className="publish">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;

