import React from "react";
import ContactInformation from "./ContactInformation";
import Title from "./Title";
import contact from "../Media/img/contact.png";

const Contact = () => {
  return (
    <div className="grid-container pt-20 md:py-40 rounded-md" id="contact">
      <div className="container md:flex justify-between gap-10 ">
        <div
          className="p-5 md:hidden block rounded-t-full  bg-lightgray dark:bg-darkblue"
          data-aos="fade-right"
        >
          <div
            className="rounded-t-full  overflow-hidden "
            data-aos="fade-right"
          >
            <img src={contact} alt="contactImage" />
          </div>
        </div>
        <div data-aos="fade-right">
          <Title
            title="Contact Us"
            subtitle="Easy To Contact Us"
            detail="Is there a problem finding your problem? Need a guide in buying first home? or need a consultation on residential issues? just contact us."
          />
          <ContactInformation />
        </div>
        <div
          className="bg-lightgray dark:bg-gray-900 p-5 rounded-t-full md:block hidden"
          data-aos="fade-left"
        >
          <div className="rounded-t-full overflow-hidden">
            <img src={contact} alt="contactImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
