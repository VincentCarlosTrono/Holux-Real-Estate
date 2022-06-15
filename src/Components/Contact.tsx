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
    <div className="grid-container py-40 rounded-md">
      <div className="container flex justify-between gap-10 ">
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
                <div className="shadow-md p-5 hover:shadow-xl">
                  <div className="flex items-center gap-3 pb-10">
                    <div className="bg-lightgray p-2 rounded-xl"> {icon}</div>

                    <div className="text-left ">
                      <h1>{contact}</h1>
                      <h1>{number}</h1>
                    </div>
                  </div>
                  <button className="bg-lightgray py-2 px-8 text-blue text-center rounded-md">
                    {button}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-lightgray p-5 rounded-t-full">
          <div className="rounded-t-full overflow-hidden">
            <img src={contact} alt="contactImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
