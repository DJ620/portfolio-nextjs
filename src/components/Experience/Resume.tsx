"use client";
import { useState } from "react";
import Job from "./Job";
import { jobs } from "../../../public/Assets/JobsInfo";
import { roboto } from "../../../public/Assets/Fonts";

const Resume = () => {
  const [currentJob, setCurrentJob] = useState<string>("");

  const handleChangeJob = (company: string) => {
    if (currentJob === company) {
      setCurrentJob("");
    } else {
      setCurrentJob(company);
    }
  };

  return (
    <div className={`md:flex md:border-l-2 md:border-cyan-700 md:justify-between md:gap-10 ${roboto.className}`}>
      <div className="hidden space-y-20 md:block">
        {jobs.map((job, index) => {
          return (
            <div key={index} className={`pb-2 ${
                job.company === currentJob && "text-cyan-700 border-b-2 border-cyan-700"
              }`}>
              <p
                className={`text-xl uppercase text-nowrap cursor-pointer pl-5`}
                onClick={() => handleChangeJob(job.company)}
              >
                {job.company}
              </p>
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
