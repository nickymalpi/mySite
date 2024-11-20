import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import ProgressBar from "./progressBar";

const About = () => {
  const circleProgressData = [
    { language: "Italian", progress: 100 },
    { language: "English", progress: 90 },
    { language: "Spanish", progress: 35 },
  ];

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                About Me
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%]">
                <p className="mb-[15px]">
                  Hello there! My name is <strong>Nicoletta Rossi.</strong> I am
                  a Junior Front-End Dev.
                </p>
                <p className="mb-[15px]">
                  Over the years, I have gained a wide range of professional
                  experiences, from working in the hospitality industry and
                  sales assistance to managing and selling online reaching the
                  role of E-commerce Manager.
                </p>
                <p className="mb-[15px]">
                  In the past year, I have developed a strong interest in
                  programming, focusing on Front-End development with expertise
                  in HTML, CSS, JavaScript, and React.{" "}
                </p>
                <p>
                  I am open-minded about the future and eager to continue
                  expanding my knowledge and experience in the field.
                </p>
              </div>
              <div className="right w-[50%]">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Name:
                    </span>
                    <span className="second inline-block">Nicoletta Rossi</span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Address:
                    </span>
                    <span className="second inline-block">
                      Cattolica, Rimini
                    </span>
                  </li>

                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Mail:
                    </span>
                    <span className="second inline-block">
                      <a
                        className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                        href="mailto:nicolettarossi93@yahoo.it"
                      >
                        nicolettarossi93@yahoo.it
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Phone:
                    </span>
                    <span className="second inline-block">+39 331 5871540</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list w-full">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Stack Knowledge
                  </span>
                </div>
                <div className="flex w-full flex-row ">
                  <div className="list w-full h-auto clear-both float-left mt-[55px]">
                    <ul>
                      <li className="mb-[8px] w-full float-left relative pl-[25px]">
                        HTML5, CSS3, Javascript
                      </li>
                      <li className="mb-[8px] w-full float-left relative pl-[25px]">
                        React
                      </li>
                      <li className="mb-[8px] w-full float-left relative pl-[25px]">
                        Redux, Redux toolkit
                      </li>
                      <li className="mb-[8px] w-full float-left relative pl-[25px]">
                        NextJS
                      </li>
                    </ul>
                  </div>
                  <div className="list w-full h-auto clear-both float-left mt-[55px]">
                    <ul>
                      <li className="mb-[8px] w-full float-left relative pl-[25px]">
                        Tailwind
                      </li>
                      <li className="mb-[8px] w-full float-left relative pl-[25px]">
                        Vercel, Netlify
                      </li>
                      <li className="w-full float-left relative pl-[25px]">
                        Git
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list  w-full">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Interests
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Nature;
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Cooking
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Music
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Travel
                    </li>
                    <li className="w-full float-left relative pl-[25px]">
                      Snowboarding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list  w-full">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Languages
                  </span>
                </div>
                <div className="circular_progress_bar w-full h-auto clear-both float-left mt-[62px]">
                  <ul>
                    {circleProgressData.map((item, idx) => (
                      <li key={idx}>
                        <div className="list_inner">
                          <div
                            className="myCircle"
                            style={{ width: 120, height: 120 }}
                          >
                            <CircularProgressbar
                              width={120}
                              value={item.progress}
                              strokeWidth={3}
                              styles={buildStyles({
                                pathColor: "#7d7789",
                                trailColor: "rgba(0,0,0,0)",
                              })}
                            />
                            <span className="number">{item.progress}%</span>
                            <div className="title">
                              <span>{item.language}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume w-full h-auto clear-both float-left ">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mb-[87px]">
              <div className="education w-full">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Education
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2024 - running
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Next Wave Tech
                            </h3>
                            <span className="text-[14px]">
                              Front-End Developer training course.
                            </span>
                          </div>
                        </div>
                      </li>

                      <li className="w-full float-left relative pl-[20px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2007 - 2012
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Liceo della Comunicazione
                            </h3>
                            <span className="text-[14px]">
                              Diploma scientifico
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience  w-full h-auto clear-both float-left">
              <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                  Experience
                </span>
              </div>
              <div className="list w-full h-auto clear-both float-left">
                <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                  <ul className="relative inline-block pt-[10px]">
                    <li className="w-full float-left relative pl-[20px] pb-[45px]">
                      <div className="list_inner w-full h-auto clear-both flex relative">
                        <div className="time w-1/2 pr-[20px]">
                          <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                            2020 - 2024
                          </span>
                        </div>
                        <div className="place w-1/2 pl-[20px]">
                          <h3 className="text-[16px] mb-[2px] font-semibold">
                            Estrosa srl
                          </h3>
                          <span className="text-[14px]">E-Commerce</span>
                        </div>
                      </div>
                    </li>
                    <li className="w-full float-left relative pl-[20px]">
                      <div className="list_inner w-full h-auto clear-both flex relative">
                        <div className="time w-1/2 pr-[20px]">
                          <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                            2010 - 2019
                          </span>
                        </div>
                        <div className="place w-1/2 pl-[20px]">
                          <h3 className="text-[16px] mb-[2px] font-semibold">
                            Other Experience
                          </h3>
                          <span className="text-[14px]">
                            Gained extensive experience as a sales assistant,
                            barista, and waitress, honing skills in customer
                            service, sales, and managing customer relationships
                            in fast-paced environments.
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
