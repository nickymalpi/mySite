const Footer = () => {
  return (
    <div className="cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden">
      <div className="copyright">
        <p className="text-[#333] font-poppins">Copyright © 2024</p>
      </div>
      <div className="social">
        <ul>
          <li className="mr-[15px] inline-block">
            <a
              className="text-[#333]"
              href="https://github.com/nickymalpi"
              target="_blank"
            >
              <img
                className="svg inline-block"
                src="assets/img/svg/social/iconagitHub.svg"
                alt="image"
              />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="text-[#333]"
              href="https://www.linkedin.com/in/nicoletta-rossi-b10267175/"
              target="_blank"
            >
              <img
                className="svg inline-block"
                src="assets/img/svg/social/iconalinkedin.svg"
                alt="image"
                
              />
            </a>
          </li>
          {/* <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/iconacookies.svg"
                alt="policy"
              />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default Footer;
