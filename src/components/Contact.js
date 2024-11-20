import SectionContainer from "../layout/SectionContainer";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();
  const [isLoading, setIsLoading] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();

  const sendEmail = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.API_PRIVATE_EMAILJS_KEY,
        process.env.API_TEMPLATE_EMAILJS_KEY,
        form.current,
        {
          publicKey: process.env.API_PUBLIC_EMAILJS_KEY,
        }
      )
      .then(
        (data) => {
          setIsSuccess(true);
          setIsLoading(false);
          reset();
        },
        (error) => {
          setIsError(true);
          setIsLoading(false);
        }
      );
  };

  const onSubmit = (data, e) => {
    sendEmail();
    e.target.reset();
    console.log("message" + JSON.stringify(data));
  };

  return (
    <SectionContainer navName="contact">
      <div className="section_inner">
        <div className="cavani_tm_contact w-full h-auto clear-both float-left mb-[100px]">
          <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
            <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
              Get in Touch
            </span>
          </div>
          <div className="short_info w-full h-auto clear-both float-left mt-[62px]">
            <ul className="ml-[-30px] flex flex-wrap">
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="contatti inline-block w-[18px] h-[18px] mb-[10px] "
                    src="assets/img/svg/iconalocalizzazione.svg"
                    alt="image"
                  />
                  <span className="block">Cattolica, Rimini</span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="contatti inline-block w-[25px] h-[25px] mb-[10px]"
                    src="assets/img/svg/iconamail2.svg"
                    alt="image"
                  />
                  <span className="block">
                    <a
                      className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                      href="#"
                    >
                      nicolettarossi93@yahoo.it
                    </a>
                  </span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="contatti inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/iconatelefono.svg"
                    alt="image"
                  />
                  <span className="block">+39 331 5871540</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="form w-full h-auto clear-both flex">
            <div className="left w-1/2 pr-[15px]">
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  ref={form}
                  onSubmit={handleSubmit(sendEmail)}
                  className="contact_form"
                  id="contact_form"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="first w-full float-left">
                    <ul>
                      <li className="w-full mb-[30px] float-left">
                        <input
                          {...register("name", { required: true })}
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Name"
                          autoComplete="off"
                          style={{ marginBottom: errors.name ? "10px" : "0px" }}
                        />
                        {errors.name && errors.name.type === "required" && (
                          <span className="invalid-feedback">
                            Name is required
                          </span>
                        )}
                      </li>
                      <li className="w-full mb-[30px] float-left">
                        <input
                          {...register(
                            "email",
                            {
                              required: "Email is Required",
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message:
                                  "Entered value does not match email format",
                              },
                            },
                            { required: true }
                          )}
                          id="email"
                          type="text"
                          name="email"
                          placeholder="Email"
                          autoComplete="off"
                          style={{ marginBottom: errors.name ? "10px" : "0px" }}
                        />
                        {errors.email && (
                          <span className="invalid-feedback ">
                            {errors.email.message}
                          </span>
                        )}
                      </li>
                      <li className="w-full mb-[30px] float-left">
                        <textarea
                          {...register("message", { required: true })}
                          id="message"
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                        {errors.message && (
                          <span className="invalid-feedback">
                            Message is required.
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="mb-[30px]">
                    {isSuccess && (
                      <span className="invalid-feedback">
                        Message sent successfully! You will hear from me soon!
                      </span>
                    )}
                    {isError && (
                      <span className="invalid-feedback">
                        Something went wrong, please send us an email
                      </span>
                    )}
                  </div>
                  <div className="cavani_tm_button">
                    <button
                      type="submit"
                      id="send_message"
                      className="anchorlikebutton"
                      disabled={isSuccess || isLoading}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="right w-1/2 pl-[15px] relative">
              <div className="map_wrap">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      width="100%"
                      height={355}
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=47841%20cattolica&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                    <a href="https://fmovies-online.net">fmovies</a>
                    <br />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
                      }}
                    />
                    <a href="https://www.embedgooglemap.net">
                      embedgooglemap.net
                    </a>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
                      }}
                    />
                  </div>
                </div>
                {/* Get your API here https://www.embedgooglemap.net */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
