import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [messageStatus, setMessageStatus] = useState("message");
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
          console.log("message - " + result.text);
          setMessageStatus("sent");
        },
        (error) => {
          console.log(error.text);
          setMessageStatus("error");
        }
      );
  };

  function resetContactForm() {
    setMessageStatus("message");
  }

  return (
    // <div className="w-screen md:[60%]">
    <div className="w-[90%] md:w-[400px] lg:w-[600px] md:h-[500px] bg-zinc-500/20 backdrop-blur-md shadow-sm shadow-black rounded-xl dark:bg-black/30 p-5 md:p-10 dark:text-zinc-200">
      {messageStatus === "message" && (
        <div>
          <h3 className="text-lg font-bold">
            Please leave me a message and I will get back to you as soon as
            possible
          </h3>
          <hr className="mt-2" />
          <form className="grid grid-cols-1 " ref={form} onSubmit={sendEmail}>
            <label className="mt-2 mb-1 font-bold">Name</label>
            <input
              type="text"
              name="user_name"
              className="border-zinc-800 border-1 rounded-sm px-2 py-2 dark:bg-zinc-700"
            />
            <label className="mt-2 mb-1 font-bold">Email</label>
            <input
              type="email"
              name="user_email"
              className="border-black border-1 rounded-sm px-2 py-2 dark:bg-zinc-700"
            />
            <label className="mt-2 mb-1 font-bold">Message</label>
            <textarea
              name="message"
              className="border-black border-1 rounded-sm h-36 p-1 dark:bg-zinc-700"
            />
            <button
              type="submit"
              value="Send"
              className="ml-auto mt-2 text-black shadow-sm shadow-black w-20 rounded-md bg-zinc-200 dark:bg-zinc-500 dark:text-zinc-200 dark:shadow-zinc-200 hover:bg-zinc-400 dark"
            >
              Send
            </button>
          </form>
        </div>
      )}
      {messageStatus === "sent" && (
        <div>
          <p>Thank you for your message!</p>
          <p>I will get back to you as soon as possible</p>
          <button
            onClick={resetContactForm}
            className="text-black border-black border-2 w-20 rounded-sm bg-zinc-200 hover:bg-red-700 cursor-pointer"
          >
            New message
          </button>
        </div>
      )}
      {messageStatus === "error" && (
        <div>
          <p>Oops!</p>
          <p>Seems like something went wrong. Please try again!</p>
          <button
            onClick={resetContactForm}
            className="text-black border-black border-2 w-20 rounded-sm bg-zinc-200 hover:bg-red-700 cursor-pointer"
          >
            New message
          </button>
        </div>
      )}
    </div>
    // </div>
  );
}

export default ContactForm;
