import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hicvtse",
        "template_f8eqsoj",
        form.current,
        "-FPT4qR6a8xvP0_di"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <div className="w-screen md:[60%]">
      <div className="w-[90%] md:w-[400px] lg:w-[600px] md:h-[500px] bg-zinc-500/20 backdrop-blur-md shadow-sm shadow-black rounded-xl dark:bg-black/30 p-5 md:p-10 dark:text-zinc-200">
        <p className="text-lg font-bold">Please leave me a message and I will get back to you as soon as possible</p>
        <hr className="mt-2"/>
        <form
          className="grid grid-cols-1 "
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="mt-2 mb-1 font-bold">Name</label>
          <input
            type="text"
            name="user_name"
            className="border-zinc-800 border-1 rounded-sm px-2 py-2"
          />
          <label className="mt-2 mb-1 font-bold">Email</label>
          <input
            type="email"
            name="user_email"
            className="border-black border-1 rounded-sm px-2 py-2"
          />
          <label className="mt-2 mb-1 font-bold">Message</label>
          <textarea
            name="message"
            className="border-black border-1 rounded-sm h-36 p-1"
          />
          <button type="submit" value="Send" className="border-black border-2 w-20 rounded-sm bg-zinc-200 hover:bg-red-700 cursor-pointer">
            Send
          </button>
        </form>
      </div>
    // </div>
  );
}

export default ContactForm;
