import Header from "@/src/layout/Header";
import { dataImage } from "@/src/utils";
import dynamic from "next/dynamic";
import { Fragment, useEffect } from "react";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Preloader from "./Preloader";

const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
  }, []);

  return (
    <Fragment>
      <Preloader />
      {/* WRAPPER ALL */}
      <div
        className="cavani_tm_all_wrap w-full min-h-[100vh] clear-both float-left relative"
        data-magic-cursor="show"
        data-enter="fadeInUp"
      >
        <div className="cavani_tm_left_border fixed inset-y-0 left-0 w-[70px] bg-white z-[10]" />
        <div className="cavani_tm_right_border fixed inset-y-0 right-0 w-[70px] bg-white z-[10]" />

        {/* HEADER */}
        <Header />
        {/* /HEADER */}
        {/* MAINPART */}
        {children}
        {/* /MAINPART */}
        {/* FOOTER */}
        <Footer />
        {/* /FOOTER */}
        {/* MAGIC CURSOR */}
        <Cursor />
        {/* /MAGIC CURSOR */}
      </div>
    </Fragment>
  );
};
export default Layout;
