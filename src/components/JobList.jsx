import React, { useState } from "react";  
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";
import amazon from "../assets/amazon.png";
import node from "../assets/node.png";
import swiggy from "../assets/swiggy.png";

import "./style/JobList.css";

const jobs = [
  {
    logo: amazon,
    title: "Full Stack Developer",
    posted: "24h Ago",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    location: "Bangalore",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    logo: node,
    title: "Node Js Developer",
    posted: "24h Ago",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    location: "Hyderabad",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    logo: swiggy,
    title: "UX/UI Designer",
    posted: "24h Ago",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    location: "Delhi",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    logo: amazon,
    title: "Full Stack Developer",
    posted: "24h Ago",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    location: "Bangalore",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    logo: node,
    title: "Node Js Developer",
    posted: "24h Ago",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    location: "Hyderabad",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    logo: swiggy,
    title: "UX/UI Designer",
    posted: "24h Ago",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    location: "Delhi",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    logo: amazon,
    title: "Full Stack Developer",
    posted: "24h Ago",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    location: "Bangalore",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    logo: node,
    title: "Node Js Developer",
    posted: "24h Ago",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    location: "Hyderabad",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  }
];

const JobList = () => {
  const [filters, setFilters] = useState({
    search: "",
    location: ""
  });

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchesLocation = filters.location
      ? job.location.toLowerCase().includes(filters.location.trim().toLowerCase())
      : true;

    return matchesSearch && matchesLocation;
  });

  return (
    <div>
      <JobFilter onFilter={setFilters} />

      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, idx) => <JobCard key={idx} {...job} />)
        ) : (
          <p className="no-jobs">No jobs found.</p>
        )}
      </div>
    </div>
  );
};
export default JobList;
