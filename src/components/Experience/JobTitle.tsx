import React from "react";

type props = {
    job: any
    currentJob: string
    handleChangeJob: (arg0: string) => void
}

const JobTitle = ({job, currentJob, handleChangeJob}: props) => {
  return (
    <div
      className={`pb-2 title ${
        job.company === currentJob && "text-cyan-700 title-border"
      }`}
      onClick={() => handleChangeJob(job.company)}
    >
      <p className={`text-xl uppercase text-nowrap cursor-pointer pl-5`}>
        {job.company}
      </p>
    </div>
  );
};

export default JobTitle;
