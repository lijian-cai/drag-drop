import React, { useState } from "react";
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

const Title = styled.div`
  flex: ${(props) => props.flex || "1"};
`;

const Text = styled.h4`
  font-weight: 600;
  padding-left: 10px;
`;

const Footer = styled.div`
  display: flex;
  height: 40px;
  padding: 5px 10px 10px 15px;
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

const Wrapper = styled.div`
  flex: ${(props) => props.flex || "1"};
  padding: 5px;
  box-sizing: border-box;

  & > input {
    width: 95%;
    padding: 5px;
    border-color: #007ac0;
    font-weight: 600;
  }
`;

export default function Column({ title, editTitle }) {
  const [isEditing, setIsEditing] = useState(false);

  console.log(isEditing);
  return (
    <Container>
      <Header>
        <Title flex="8">
          {isEditing ? (
            <Wrapper flex="8">
              <Input
                name="title"
                value={title}
                onChange={editTitle}
                onBlur={() => setIsEditing(false)}
              />
            </Wrapper>
          ) : (
            <Text onClick={() => setIsEditing(!isEditing)}>{title}</Text>
          )}
        </Title>
        <Link center={true}>...</Link>
      </Header>
      <Footer>
        <Link flex="8">+ Add a card</Link>
        <Link center={true}>...</Link>
      </Footer>
    </Container>
  );
}
