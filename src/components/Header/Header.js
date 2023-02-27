import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillHome,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineHome,
  AiOutlineLoading,
  AiTwotoneHome,
} from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <ImSpinner9 size="2rem" /> <Span>&nbsp;&nbsp;Furkan Yavuz</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        target="_blank"
        href="https://github.com/The-Umbra?tab=repositories"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/furkanhyavuz/"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.instagram.com/furkanyvzx">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
