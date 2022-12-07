import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const Header = ({ section, title }) => {
  const customAnimation = keyframes`
    from {
      clip-path: inset(0px 50% 0px 50%);
  
    }
  
    to {
      clip-path: inset(0px 0px 0px 0px);
    }
  `;

  return (
    <Reveal keyframes={customAnimation} triggerOnce duration={2000}>
      <h1 className={`${section}`}>{title}</h1>
    </Reveal>
  );
};

export default Header;
