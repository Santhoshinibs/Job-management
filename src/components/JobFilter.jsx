import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import "./style/JobFilter.css";

const JobFilter = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [minSalary, setMinSalary] = useState(50000);
  const [maxSalary, setMaxSalary] = useState(80000);

  // helper function to push values up to JobList
  const updateFilters = (newValues = {}) => {
    const filters = {
      search,
      location,
      jobType,
      minSalary,
      maxSalary,
      ...newValues, // overwrite with latest change
    };
    onFilter(filters);
  };

  return (
    <div className="job-filter-container">
      {/* Job Title */}
      <div className="filter-item">
        <FaSearch className="filter-icon" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            updateFilters({ search: e.target.value });
          }}
        />
      </div>
      <div className="divider"></div>

      {/* Location */}
      <div className="filter-item">
        <FaMapMarkerAlt className="filter-icon" />
        <select
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            updateFilters({ location: e.target.value });
          }}
        >
          <option value="">Choose Preferred Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      <div className="divider"></div>

      {/* Job Type */}
      <div className="filter-item">
        <FaBriefcase className="filter-icon" />
        <select
          value={jobType}
          onChange={(e) => {
            setJobType(e.target.value);
            updateFilters({ jobType: e.target.value });
          }}
        >
          <option value="">Job Type</option>
          <option value="internship">Internship</option>
          <option value="fulltime">Fulltime</option>
          <option value="parttime">Part-time</option>
          <option value="contract">Contract</option>
        </select>
      </div>
      <div className="divider"></div>

      {/* Salary Filter */}
      <div className="salary-range">
        <label className="salary-label">
          Salary Per Month &nbsp;
          <span className="salary-values">
            ₹{minSalary / 1000}k - ₹{maxSalary / 1000}k
          </span>
        </label>

        <div className="slider-container">
          <div className="slider-track"></div>
          <div
            className="slider-range"
            style={{
              left: `${(minSalary / 200000) * 100}%`,
              right: `${100 - (maxSalary / 200000) * 100}%`,
            }}
          ></div>

          <input
            type="range"
            min="10000"
            max="200000"
            step="5000"
            value={minSalary}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), maxSalary - 5000);
              setMinSalary(value);
              updateFilters({ minSalary: value });
            }}
            className="thumb thumb-left"
          />
          <input
            type="range"
            min="10000"
            max="200000"
            step="5000"
            value={maxSalary}
            onChange={(e) => {
              const value = Math.max(Number(e.target.value), minSalary + 5000);
              setMaxSalary(value);
              updateFilters({ maxSalary: value });
            }}
            className="thumb thumb-right"
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilter;





