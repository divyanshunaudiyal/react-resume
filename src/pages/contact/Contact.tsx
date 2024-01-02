import useCursor from "../../components/useCursor/useCursor";
import { motion, Variants } from "framer-motion";
function Contact() {
  const { mousePosition, cursorVariant, textEnter, textLeave } = useCursor();

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 9,
  //     y: mousePosition.y - 9, //size of cursor is 32px so to center it do -16
  //   },
  //   text: {
  //     height: 50,
  //     width: 50,
  //     x: mousePosition.x - 25,
  //     y: mousePosition.y - 25, // size 50 , so -25

  //     background: "cadetblue",
  //     mixBlendMode: "difference",
  //   },
  // };

  return (
    <motion.div className="contact">
      {/* <motion.div
        className="cursor"
        variants={variants as Variants}
        animate={cursorVariant}
      ></motion.div> */}
      <div className="contact-container">
        <h1 className="contact-heading">Get in touch.</h1>
        <h3 className="mail">
          Shoot an email{" "}
          <a
            href="mailto:div.naudiyal@gmail.com"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Div.naudiyal@gmail.com
          </a>{" "}
          or
        </h3>
        <div className="contact-msg contact-form" id="contact-form">
          <form action="">
            <label className="label">
              <input
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                type="text"
                placeholder="name"
                id="name"
              />
            </label>
            <label className="label">
              <input
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                type="email"
                placeholder="email"
                id="email"
              />
            </label>
            <label className="label">
              <input
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                type="number"
                placeholder="phone number"
                id="phone-num"
              />
            </label>
            <label className="label">
              <input
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                type="text"
                placeholder="message"
                id="message"
              />
            </label>
            <button
              type="submit"
              id="whatsapp-btn"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Text on Whatsapp
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
