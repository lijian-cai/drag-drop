import React, { useState } from "react";
import styled from "styled-components";
import Column from "../common/Column";
import CardToAdd from "../common/CardToAdd";

import {
  arrayFindElementById,
  updateArrayOfObj,
} from "../helpers/common.helper";

import { INITIAL_COLUMNS } from "./dashboard.data";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px 5px;
`;

const Wrapper = styled.div`
  min-width: 272px;
  width: 272px;
  margin: 0px 5px;
  box-sizing: border-box;
  border-radius: 3px;
`;

const Link = styled.a`
  display: block;
  min-width: 272px;
  width: 272px;
  height: 40px;
  margin-left: 5px;
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  background-color: #ffffff3d;
  color: white;

  &:hover {
    background-color: #ffffff52;
  }
`;

export default function Dashboard() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [isAdding, setIsAdding] = useState(false);

  const columnTitleEdit = (e, id) => {
    const column = arrayFindElementById(columns, id);
    column.title = e.target.value;

    setColumns(updateArrayOfObj(columns, id, column));
  };

  const onColumnAdd = (title) => {
    const newColumn = { id: columns.length + 1, title: title };
    setColumns([...columns, newColumn]);
  };

  return (
    <Container>
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          onTitleEdit={columnTitleEdit}
        />
      ))}
      {isAdding ? (
        <Wrapper>
          <CardToAdd
            bgColor={"#ebecf0"}
            onClose={() => setIsAdding(false)}
            onClick={onColumnAdd}
            placeholder="Enter list title..."
            name="add-list"
          />
        </Wrapper>
      ) : (
        <Link onClick={() => setIsAdding(true)}>+ Add another list</Link>
      )}
    </Container>
  );
}
