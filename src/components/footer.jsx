import { styled } from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 20px 0;
  height: 40px;
`;

const BlogLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      &copy; 2024 로번생. All rights reserved. | Visit&nbsp;
      <BlogLink href="https://calkolab.tistory.com/">CALKO LAB</BlogLink>
    </FooterContainer>
  );
}
