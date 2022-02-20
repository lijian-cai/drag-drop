import React, { useState } from "react";
import styled from "styled-components";
import Column from "../common/Column";

import { arrayFindElementById, updateArrayOfObj } from "../helpers/common.helper";

import { INITIAL_COLUMNS } from "./dashboard.data";

const Container = styled.div`
  display: flex;
  padding: 30px 5px;
`;

export default function Dashboard() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);

  const columnTitleEdit = (e, id) => {
    const column = arrayFindElementById(columns, id);
    column.title = e.target.value;

    setColumns(updateArrayOfObj(columns, id, column));
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
    </Container>
  );
}
