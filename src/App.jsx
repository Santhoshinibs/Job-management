import React from "react";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import CreateJob from "./components/CreateJob";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Routes>
      <Route
          path="/"
          element={
            <>
              <Navbar />
              <JobList />
            </>
          }
        />

        {/* Create Job page WITHOUT Navbar */}
        <Route path="/create-job" element={<CreateJob />} />
      </Routes>
      
    </>
  );
}

export default App;

