import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm({ language }) {
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
    <div className="w-[90%] md:w-[400px] lg:w-[600px] md:h-[500px] bg-zinc-500/20 backdrop-blur-md shadow-sm shadow-black rounded-xl dark:bg-black/30 p-5 md:p-10 dark:text-zinc-200 dark:text-shadow">
      {messageStatus === "message" && (
        <div>
          <h3 className="text-lg font-bold">
            {language === "english"
              ? "Leave a message here and I will get back to you as soon as possible"
              : "Hinterlassen Sie mir eine Nachricht und ich melde mich in Kürze"}
          </h3>
          <hr className="mt-2" />
          <form className="grid grid-cols-1 " ref={form} onSubmit={sendEmail}>
            <label className="mt-2 mb-1 font-bold">
              {language === "english" ? "name" : "Name"}
            </label>
            <input
              type="text"
              name="user_name"
              className="border-zinc-800 border-1 rounded-sm px-2 py-2 dark:bg-zinc-700"
            />
            <label className="mt-2 mb-1 font-bold">
              {language === "english" ? "email" : "Email"}
            </label>
            <input
              type="email"
              name="user_email"
              className="border-black border-1 rounded-sm px-2 py-2 dark:bg-zinc-700"
            />
            <label className="mt-2 mb-1 font-bold">
              {language === "english" ? "message" : "Nachricht"}
            </label>
            <textarea
              name="message"
              className="border-black border-1 rounded-sm h-36 p-1 dark:bg-zinc-700"
            />
            <button
              type="submit"
              value="Send"
              className="ml-auto mt-2 text-black shadow-sm shadow-black w-20 rounded-md bg-zinc-200 dark:bg-zinc-500 dark:text-zinc-200 dark:shadow-black dark:text-shadow hover:bg-zinc-400 dark:hover:bg-zinc-700"
            >
              {language === "english" ? "send" : "Senden"}
            </button>
          </form>
        </div>
      )}
      {messageStatus === "sent" && (
        <div className="grid items-center justify-center h-full w-full">
          <div>
            <p className="font-bold text-xl">
              {language === "english"
                ? "Thank you for your message!"
                : "Vielen Dank!"}
            </p>
            <p className="text-lg">
              {language === "english"
                ? "I will get back to you as soon as possible"
                : "Ich melde mich so bald wie möglich"}
            </p>
            <button
              onClick={resetContactForm}
              className="mt-4 text-black shadow-sm shadow-black w-20 rounded-md bg-zinc-200 dark:bg-zinc-500 dark:text-zinc-200 dark:shadow-black dark:text-shadow hover:bg-zinc-400 dark:hover:bg-zinc-700"
            >
              {language === "english" ? "New message" : "Neue Nachricht"}
            </button>
          </div>
        </div>
      )}
      {messageStatus === "error" && (
        <div className="grid items-center justify-center h-full w-full">
          <div>
            <p className="font-bold text-xl">
              {language === "english" ? "OOPS!" : "Hoppala!"}
            </p>
            <p className="text-lg">
              {language === "english"
                ? "Seems like something went wrong. Please try again!"
                : "Da dürfte etwas falsch gelaufen sein..."}
            </p>
            <button
              onClick={resetContactForm}
              className="mt-4 text-black shadow-sm shadow-black w-20 rounded-md bg-zinc-200 dark:bg-zinc-500 dark:text-zinc-200 dark:shadow-black dark:text-shadow hover:bg-zinc-400 dark:hover:bg-zinc-700"
            >
              {language === "english" ? "New try" : "Neuer Versuch"}
            </button>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}

export default ContactForm;
