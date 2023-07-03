import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <ul className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <li className="w-14 h-14" key={technology.name}>
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-[100%] h-[100%] object-contain"
          />
        </li>
      ))}
    </ul>
  );
};

export default SectionWrapper(Tech, "");
