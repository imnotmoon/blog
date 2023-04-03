import { styled } from 'solid-styled-components';

export const Footer = styled.div`
  margin-left: auto;
`;

export const Body = styled.ul`
  display: flex;
  > * {
    list-style: none;
    display: block;
    padding: 8px 16px;
  }
  > li + li {
    margin-left: 20px;
  }
`;

export const Root = styled.nav`
  height: 50px;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${Body.class} {
    margin-left: 40px;
  }
`;
