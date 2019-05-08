// @flow
import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 0.625rem;
  border: 1px solid #ddd;
  background: white;
`;

const Th = styled(Td)`
  padding: 0.625rem;
  text-align: left;
  font-weight: bold;
  background: #ededed;
`;

const NoData = styled.p`
  margin: 0;
  text-align: center;
`;

type TableProps = {
  colDefs: Array<string>,
  rowData: Array<any>
};

function TableComponent(props: TableProps) {
  return (
    <Table>
      <thead>
        <tr>
          {props.colDefs.map((col, index) => (
            <Th key={index}>{col}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rowData.length === 0 && (
          <tr>
            <Td colSpan={props.colDefs.length}>
              <NoData>You currently have no entries to display.</NoData>
            </Td>
          </tr>
        )}

        {props.rowData.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((item, index) => (
              <Td key={index}>{row[item]}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TableComponent.defaultProps = {
  colDefs: [],
  rowData: []
};

export default TableComponent;
