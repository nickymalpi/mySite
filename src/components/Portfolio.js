import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    console.log(data);
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          // layoutMode: "fitRows",
        });
      }, 3000);
    }

    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });

  return (
    <Fragment>
      <ImageView />

      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left ">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden mb-[50px]">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                My Portfolio
              </span>
            </div>

            <div className="portfolio_list w-full h-auto clear-both float-left ">
              <ul className="gallery_zoom ml-[-50px]">
                <li className=" mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div
                    className="list_inner w-full h-auto clear-both float-left relative overflow-hidden"
                    style={{ width: "250px" }}
                  >
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/underconstruction.png"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Website
                        </h3>
                        <span className="text-[14px]">I Due Asinelli</span>
                      </div>
                      <a
                        onClick={() => {}}
                        className="cavani_tm_full_link "
                        href="#"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default Portfolio;
