import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";

const { Header, HeaderCell, Row, Body, Cell } = SemanticTable;

type TableProps = {
  columns: Array<string>;
  title: string;
  rows: Array<any>;
  color: any;
};

const Table = ({ title, columns, rows, color }: TableProps) => {
  return (
    <div>
      <h3 className="table-title">{title}</h3>
      <SemanticTable celled striped color={color} key={color} unstackable>
        <Header>
          <Row>
            {columns.map((column, index) => (
              <HeaderCell key={index}>{column}</HeaderCell>
            ))}
          </Row>
        </Header>
        <Body>
          {rows.map((row, index) => (
            <Row key={index}>
              <Cell key={index}>{index + 1}</Cell>
              {row.map((column, index) => (
                <Cell key={index}>{column}</Cell>
              ))}
            </Row>
          ))}
        </Body>
      </SemanticTable>
    </div>
  );
};

export default Table;
