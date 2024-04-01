"use client";
import { useState } from "react";
import Job from "./Job";
import { jobs } from "../../../public/Assets/JobsInfo";
import { roboto } from "../../../public/Assets/Fonts";
import JobTitle from "./JobTitle";

const Resume = () => {
  const [currentJob, setCurrentJob] = useState<string>("Pocket Pitch");

  const handleChangeJob = (company: string) => {
    if (currentJob === company) {
      setCurrentJob("");
    } else {
      setCurrentJob(company);
    }
  };

  return (
    <div className={`md:flex md:justify-between md:gap-10 ${roboto.className}`}>
      <div className="hidden space-y-20 md:block">
        {jobs.map((job, index) => {
          return (
            <div key={index}>
              <JobTitle job={job} currentJob={currentJob} handleChangeJob={handleChangeJob} />
            </div>
          );
        })}
      </div>
      <div className="space-y-8 md:space-y-0">
        {jobs.map((job, index) => {
          return (
            <Job
              key={index}
              job={job}
              currentJob={currentJob}
              setCurrentJob={setCurrentJob}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
