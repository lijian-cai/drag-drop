import React from "react";
import styled from "styled-components";

import Input from "./Input";

const Container = styled.div`
  background-color: #ebecf0;
  max-width: 272px;
  width: 272px;
  margin: 0px 5px;
  box-sizing: border-box;
  border-radius: 3px;
`;

const Header = styled.div`
  display: flex;
  height: 40px;
  box-sizing: border-box;
  padding: 5px 10px;
  align-items: center;
`;

const Title = styled.h4`
  font-weight: 600;
`;

const Footer = styled.div`
  display: flex;
  height: 40px;
  padding: 5px 10px 10px 10px;
  box-sizing: border-box;
  align-items: center;
`;

const Link = styled.a`
  flex: ${(props) => props.flex || "1"};
  padding: 4px;
  border-radius: 3px;
  color: #5e6c84;
  cursor: pointer;
  text-align: ${(props) => (props.center ? "center" : "left")};

  &:hover {
    background-color: #091e4214;
  }
`;

export default function Column({ title }) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Input name="title" value={title} onChange={()=>{}} />
      </Header>
      <Footer>
        <Link flex="8">+ Add a card</Link>
        <Link center={true}>...</Link>
      </Footer>
    </Container>
  );
}
