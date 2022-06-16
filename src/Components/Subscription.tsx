import React from "react";
import { SubscriptionInterface, Subscriptions } from "src/type";

const Subscription = () => {
  const subscriptions: Subscriptions = [
    {
      total: "9K",
      text: "Premium Products",
    },
    {
      total: "2K",
      text: "Happy Customer",
    },
    {
      total: "28K",
      text: "Awards Winning",
    },
  ];
  return (
    <div className="flex md:gap-10 py-5">
      {subscriptions.map((subscription: SubscriptionInterface) => {
        const { total, text } = subscription;
        return (
          <div>
            <div className="flex">
              <h1 className="md:text-4xl text-2xl font-semibold text-white">
                {total}
              </h1>
              <p className="md:text-4xl text-2xl font-semibold text-orange-600">
                +
              </p>
            </div>

            <p className="text-gray-400 md:max-w-xs ">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Subscription;
