import React from "react";
import styled from "styled-components";

const Container = styled.a`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 10px;
  margin: 0px 10px;
  margin-bottom: 5px;
  min-height: 20px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export default function Card({ title }) {
  return <Container>{title}</Container>;
}
