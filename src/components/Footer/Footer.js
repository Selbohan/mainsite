import React from 'react';
import { AiFillCopyrightCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineCopyrightCircle, AiOutlineGoogle, AiOutlineInbox } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle><AiOutlineInbox/>Outlook</LinkTitle>
          <LinkItem href="mailto:furkanhyavuz@gmail.com">furkanhyavuz@outlook.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><AiOutlineGoogle/>Email</LinkTitle>
          <LinkItem href="mailto:furkanhyavuz@gmail.com">
            furkanhyavuz@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> <AiOutlineCopyrightCircle/> Made by &nbsp; Furkan Hasan Yavuz &nbsp;&nbsp;&nbsp;&nbsp;-2021</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Selbohan">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/furkanhyavuz/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/yavuz_san13">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;