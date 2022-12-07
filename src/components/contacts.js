import "./contacts.scss";
import { Fade } from "react-awesome-reveal";
import Header from "./displays/headerdisplay";

const Contacts = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div className="contacts_container">
      <Header section="contacts_header" title="Contact Me" />
      <Fade direction="up" triggerOnce duration={1000}>
        <div className="contacts_text">
          My tools may be different coming from a Structural Engineering
          background but the basis of providing the best service for clients in
          a team remains.
          <br />
          <br />
          As with buildings, I bring a discerning eye for patterns, creative
          solutions, and numbers - with a passion.
        </div>
        <div className="contacts_link">
          <a
            href="https://www.linkedin.com/in/tuan-anh-pham-366386130/"
            className="contacts_info"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SomeCoolName1"
            className="contacts_info"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contacts_form_container">
          <div className="contacts_form">
            <div className="contacts_title">
              Have a question or want me in your team?
              <br />
              Shoot a message!
            </div>
            <form
              action="https://formsubmit.co/e046c45ca967e2e293b745178588b312"
              method="POST"
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Enter Your Message"
                required
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        {/* <button className="top_link" onClick={() => scrollToTop()}>
          Back to top
        </button> */}
      </Fade>
    </div>
  );
};

export default Contacts;
