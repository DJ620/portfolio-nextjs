"use client";
import { useState, useEffect } from "react";
import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";

type jobProp = {
  job: {
    company: string;
    title: string;
    dates: string;
    description: string;
    bullets: string[];
  }
  currentJob: string
  setCurrentJob: any
};

const Job = ({ job, currentJob, setCurrentJob }: jobProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (job.company === currentJob) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [currentJob]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setCurrentJob("");
    } else {
      setCurrentJob(job.company);
    };
  };

  return (
    <div className="text-base">
      <div className="md:flex md:justify-between">
        <div
          className="flex justify-between cursor-pointer md:hidden"
          onClick={handleToggle}
        >
          <p className={`text-xl text-nowrap uppercase ${isOpen && "text-cyan-700"}`}>{job.company}</p>
          <div className="text-4xl text-cyan-700 md:hidden">
            {isOpen ? <PiCaretUpLight /> : <PiCaretDownLight />}
          </div>
        </div>

        {isOpen && (
          <div className="pt-5 md:pt-0 bounce">
            <div className="flex justify-between pb-3">
              <p className="font-semibold">{job.title}</p>
              <p className="italic">{job.dates}</p>
            </div>
            <p>{job.description}</p>
            <ul className="pt-3 pl-8 space-y-3 list-disc list-inside">
              {job.bullets.map((bullet, index) => {
                return <li key={index}>{bullet}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Job;
