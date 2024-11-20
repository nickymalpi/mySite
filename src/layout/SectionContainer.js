import { useContext } from "react";
import { CavaniContext } from "../Context";

const SectionContainer = ({ navName, children }) => {
  const { nav, animation } = useContext(CavaniContext);
  return (
    <div
      className={`cavani_tm_section ${
        nav == navName ? `animated active ${animation}` : "hidden"
      }`}
      id={navName}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
