import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: ${(props) => props.bgColor || "transparent"};
  border-radius: 3px;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 5px;
  
  & > input {
    width: 92%;
    padding: 10px;
    border-radius: 3px;
    border: 0;
    box-shadow: inset 0 0 0 2px #0079bf;
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 400;
  }
`;

const StyledTextarea = styled.div`
  background-color: white;
  min-height: 54px;
  box-sizing: border-box;
  padding: 5px;
  padding-bottom: 20px;
  margin-bottom: 5px;
  border-radius: 3px;
  border-bottom: 1px solid #091e4240;
  transition: all 0.3s;
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto, "Noto Sans",
    Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  letter-spacing: 0px;
  font-weight: 400;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  outline: 0px solid transparent;
`;

const AddLink = styled.a`
  display: inline-block;
  padding: 5px;
  border-radius: 3px;
  background-color: #0079bf;
  color: white;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #026aa7;
  }
`;

const CloseLink = styled.a`
  display: inline-block;
  padding: 5px;
  color: #6b778c;
  cursor: pointer;

  &:hover {
    color: #42526e;
  }
`;

export default function CardToAdd({ name, bgColor, placeholder, onClose }) {
  return (
    <Container bgColor={bgColor}>
      {name === "add-list" ? (
        <InputWrapper>
          <Input placeholder={placeholder} />
        </InputWrapper>
      ) : (
        <StyledTextarea
          name={name}
          placeholder={placeholder}
          contentEditable={true}
        />
      )}
      <Action>
        <AddLink>Add Card</AddLink>
        <CloseLink onClick={onClose}>X</CloseLink>
      </Action>
    </Container>
  );
}
