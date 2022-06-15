import React from "react";
import Title from "./Title";
import contact from "../Media/img/contact.png";

const Contact = () => {
  const contactCards = [
    {
      icon: <box-icon color="blue" name="phone-call"></box-icon>,
      contact: "Call",
      number: "022.321.165.19",
      button: "Call Now",
    },
    {
      icon: <box-icon color="blue" name="message-rounded-dots"></box-icon>,
      contact: "Chat",
      number: "022.321.165.19",
      button: "Chat Now",
    },
    {
      icon: <box-icon color="blue" name="video"></box-icon>,
      contact: "Video Call",
      number: "022.321.165.19",
      button: "Video Call Now",
    },
    {
      icon: <box-icon color="blue" name="envelope"></box-icon>,
      contact: "Message",
      number: "022.321.165.19",
      button: "Message Now",
    },
  ];

  return (
    <div className="grid-container pt-20 md:py-40 rounded-md" id="contact">
      <div className="container md:flex justify-between gap-10 ">
        <div className="p-5 md:hidden block rounded-t-full  bg-lightgray dark:bg-darkblue">
          <div className="rounded-t-full  overflow-hidden ">
            <img src={contact} alt="contactImage" />
          </div>
        </div>
        <div>
          <Title
            title="Contact Us"
            subtitle="Easy To Contact Us"
            dot="."
            detail="Is there a problem finding your problem? Need a guide in buying first home? or need a consultation on residential issues? just contact us."
          />
          <div className="grid grid-cols-2 gap-8 justify-center  text-center py-20">
            {contactCards.map((contactCard: any) => {
              const { icon, contact, number, button } = contactCard;
              return (
                <div className="shadow-md p-5 hover:shadow-xl dark:shadow-darkblue">
                  <div className="md:flex items-center gap-3 md:pb-10">
                    <div className="bg-lightgray p-2 rounded-xl dark:bg-darkblue">
                      {icon}
                    </div>

                    <div className="md:text-left text-center py-3">
                      <h1 className="dark:text-lightgray  font-semibold">
                        {contact}
                      </h1>
                      <h1 className="text-gray-400 text-sm md:text-md">
                        {number}
                      </h1>
                    </div>
                  </div>
                  <button className="bg-lightgray w-full dark:bg-darkblue py-4 text-sm md:text-md md:px-7 text-blue text-center font-semibold hover:bg-blue hover:text-white rounded-md">
                    {button}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-lightgray dark:bg-gray-900 p-5 rounded-t-full md:block hidden">
          <div className="rounded-t-full overflow-hidden">
            <img src={contact} alt="contactImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
