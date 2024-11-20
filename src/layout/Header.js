import { Fragment, useContext, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CavaniContext } from "../Context";

const navs = [
  { id: 1, name: "Home", href: "home" },
  { id: 2, name: "About me", href: "about" },
  { id: 3, name: "Portfolio", href: "portfolio" },
  { id: 4, name: "Contact me", href: "contact" },
];

const Header = () => {
  const { navChange, nav: activeNav } = useContext(CavaniContext);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      {/* //NAV MOBILE */}
      <div className="cavani_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden middle:block">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div className="logo" data-type="image">
            <a
              className="image"
              href="#home"
              onClick={() => {
                navChange("home");
              }}
            >
              <img
                className="max-w-[150px] max-h-[60px] logonicomobile"
                src="assets/img/logo/nicolettarossi3.png"
                alt="image"
              />
            </a>
          </div>
          <div className="trigger relative top-[5px]">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //SIDEBAR MOBILE */}
      <div
        className={`cavani_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ${
          toggle ? "opened" : ""
        }`}
      >
        <div className="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
          <div className="wrapper">
            <div className=" w-[70px] h-[70px] relative float-right mb-[60px]">
              <div
                className="image absolute inset-0 bg-no-repeat bg-cover bg-center "
                data-img-url="assets/img/about/foto-profilo.jpg"
              />
            </div>
            <div className="menu_list w-full h-auto clear-both float-left mb-[50px]">
              <ul className="transition_link">
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      activeNav == nav.href ? "active" : ""
                    } mb-[7px]`}
                  >
                    <a
                      onClick={() => {
                        navChange(nav.href);
                        setToggle(false);
                      }}
                      className="text-[#333] font-poppins"
                      href={`#${nav.href}`}
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="social w-full float-left mb-[5px]">
              <ul>
                <li className="mr-[8px] inline-block">
                  <a
                    className="text-[#333]"
                    href="https://github.com/nickymalpi"
                    target="_blank"
                  >
                    <img
                      className="svg"
                      src="assets/img/svg/social/iconagitHub.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a
                    className="text-[#333]"
                    href="https://www.linkedin.com/in/nicoletta-rossi-b10267175/"
                    target="_blank"
                  >
                    <img
                      className="svg"
                      src="assets/img/svg/social/iconalinkedin.svg"
                      alt="image"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright w-full float-left ">
              <p className="text-[#333] font-poppins">Copyright © 2023</p>
            </div>
          </div>
        </div>
      </div>
      {/* //DESKTOP */}
      <div className="cavani_tm_header fixed top-0 left-0 right-0 h-[70px] leading-[70px] bg-white z-[10] flex items-center justify-between py-0 px-[70px] middle:hidden pb-[20px]">
        <div className="logo" data-type="image">
          {/* You can use text or image as logo. data-type values are: "image" and "text"  */}
          <a
            className="image w-[150px] h-auto"
            href="#home"
            onClick={() => {
              navChange("home");
            }}
          >
            <img
              className="inline-block  h-auto logonico"
              src="assets/img/logo/nicolettarossi3.png"
              alt="image"
            />
          </a>
        </div>
        <div className="menu relative">
          <ul className="transition_link">
            {navs.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  activeNav == nav.href ? "active" : ""
                } float-left`}
              >
                <a
                  onClick={() => navChange(nav.href)}
                  className="text-[#333] font-poppins font-medium py-0 px-[30px] inline-block transition-all duration-300"
                  href={`#${nav.href}`}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <span className="ccc absolute block top-[15px] bottom-[15px] bg-[#333] z-[-1] transition-all duration-500" />
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
