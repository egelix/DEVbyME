import ContactForm from "./ContactForm";
import contactLight from "../../assets/Contact/mailbox.png";

function Contact({ elementRef }) {
  return (
    <section
      ref={elementRef}
      className="z-0 pt-16 h-[calc(100vh-90px)] flex flex-wrap align-middle"
    >
      <div style={{ backgroundImage: `url(${contactLight})` }} className="bg-cover bg-center w-screen">
        <div className="w-screen md:w-[60%] lg:w-[60%] h-full flex items-center justify-center">
          <ContactForm />
          {/* <div className="w-[90%] h-[90%] bg-green-200"></div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
