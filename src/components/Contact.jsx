import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          // getForm that stores data on getform.io
          action="https://getform.io/f/1e9b4891-fd20-48ef-ad17-8d38a93d8143"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Let's Connect!</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-yellow-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-pink-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none focus:border-yellow-500"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-xl hover:stroke-white"
          >
            Work With Me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
