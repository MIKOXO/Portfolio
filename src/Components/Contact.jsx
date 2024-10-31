import React from "react";

const Contact = () => {
  return (
    <section name="Contact" className="px-4 py-14 mx-auto container">
      <div>
        <h1 className="text-center text-p1 text-5xl font-bold">Contact</h1>
      </div>
      <div className="flex justify-center items-center py-10">
        <div className="shadow-500 rounded-2xl w-full sm:w-[50%]">
          <form
            className="space-y-4 p-10 flex flex-col"
            action="https://getform.io/f/bxojmkva"
            method="POST"
          >
            <input
              className="outline-none rounded-lg bg-transparent text-p1 border-2 border-s5 p-4"
              type="text"
              name="name"
              placeholder="Name"
              required
            />

            <input
              className="outline-none rounded-lg bg-transparent text-p1 border-2 border-s5 p-4"
              type="Email"
              name="email"
              placeholder="Your Email Address"
              required
            />

            <textarea
              className="outline-none rounded-lg bg-transparent text-p1 border-2 border-s5 p-3"
              name="message"
              placeholder="Message"
              rows="8"
              required
            ></textarea>
            <span id="message-error"></span>
            <button
              type="submit"
              className="px-6 py-2 lg:py-4 text-p1 text-base sm:text-xl font-semibold border-2 border-s5 w-[80%] lg:w-[50%] mx-auto rounded-full hover:shadow-500 ease-in-out duration-300 hover:-translate-y-2 hover:bg-s2"
            >
              Let's Work
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
