import React from "react";
import {
  AiFillCopyrightCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
  AiOutlineGoogle,
  AiOutlineInbox,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <AiOutlineGoogle />
            Email
          </LinkTitle>
          <LinkItem href="mailto:furkanhyavuz@gmail.com">
            furkanhyavuz@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            {" "}
            <AiOutlineCopyrightCircle /> Made by &nbsp; Furkan Hasan Yavuz
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
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
          <SocialIcons
            target="_blank"
            href="https://www.instagram.com/furkanyvzx"
          >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
