import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  BiLogoTypescript,
  BiLogoJquery,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandNextjs,
  TbBrandVscode,
} from "react-icons/tb";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiSequelize,
  SiPassport,
  SiJsonwebtokens,
  SiAxios,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Toolbox = () => {
  const tools = [
    { tech: "HTML", icon: <FaHtml5 />, style: "text-orange-600" },
    { tech: "CSS", icon: <FaCss3Alt />, style: "text-blue-600" },
    { tech: "JavaScript", icon: <IoLogoJavascript />, style: "text-yellow-500" },
    { tech: "TypeScript", icon: <BiLogoTypescript />, style: "text-blue-600 text-3xl" },
    { tech: "jQuery", icon: <BiLogoJquery />, style: "text-blue-700" },
    { tech: "React", icon: <FaReact />, style: "text-blue-500" },
    { tech: "React Native", icon: <TbBrandReactNative />, style: "text-blue-500" },
    { tech: "Redux", icon: <TbBrandRedux />, style: "text-purple-700" },
    { tech: "Next.js", icon: <TbBrandNextjs /> },
    { tech: "TailwindCSS", icon: <BiLogoTailwindCss />, style: "text-blue-400 text-3xl" },
    { tech: "Bootstrap", icon: <FaBootstrap />, style: "text-purple-800" },
    { tech: "Node", icon: <FaNodeJs />, style: "text-green-700" },
    { tech: "Express", icon: <SiExpress /> },
    { tech: "MongoDB", icon: <SiMongodb />, style: "text-green-600 text-3xl" },
    { tech: "Mongoose", icon: <SiMongoose />, style: "text-red-800 text-3xl" },
    { tech: "MySQL", icon: <GrMysql />, style: "text-blue-700" },
    { tech: "Sequelize", icon: <SiSequelize />, style: "text-blue-500"  },
    { tech: "Passport", icon: <SiPassport /> },
    { tech: "JSON Web Token (JWT)", icon: <SiJsonwebtokens /> },
    { tech: "Axios", icon: <SiAxios />, style: "text-purple-900" },
    { tech: "Git", icon: <FaGitAlt />, style: "text-orange-600 text-3xl" },
    { tech: "VS Code", icon: <TbBrandVscode />, style: "text-blue-600" },
  ];

  return (
    <div className="lg:flex flex-wrap gap-5 w-[50vw] shadow-2xl px-5 rounded-md hidden py-10">
      {tools.map((tool, index) => {
        return (
          <div key={index} className="flex items-center gap-1 text-2xl">
            <div className={`${tool.style && tool.style}`}>{tool.icon}</div>
            <p className="text-2xl">{tool.tech}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Toolbox;
