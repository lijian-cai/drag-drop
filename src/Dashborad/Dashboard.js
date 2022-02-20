import React, { useState } from "react";
import styled from "styled-components";
import Column from "../common/Column";

import { INITIAL_COLUMNS } from "./dashboard.data";

const Container = styled.div`
  display: flex;
  padding: 30px 5px;
`;

export default function Dashboard() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);

  return (
    <Container>
      {columns.map((column, index) => (
        <Column key={index} title={column.title} editTitle={() => {}} />
      ))}
    </Container>
  );
}
