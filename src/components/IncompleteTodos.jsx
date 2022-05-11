import React from "react";
import styled from "styled-components";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return(
    <CIncompletearea>
      <CTitle>未完了のTODO</CTitle>
      <ul>
        {todos.map((todo, index) => {
          return (
            <CListrow key={todo}>
              <CLi>{todo}</CLi>
              <CButton onClick={() => onClickComplete(index)}>完了</CButton>
              <CButton onClick={() => onClickDelete(index)}>削除</CButton>
            </CListrow>
            );
          })}
      </ul>
    </CIncompletearea>
  );
};

const CButton = styled.button`
  border-radius: 16px;
  border: none;
  padding: 4px 16px;
  &:hover {
    background: #ff7fff;
    color: #fff;
    cursor: pointer;
  }
`;
const CLi = styled.li`
  margin-right: 8px;
`;

const CIncompletearea = styled.div`
  background: #c6ffe2;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;
const CTitle = styled.p`
  text-align: center;
  margin-top: 0;
  font-weight: bold;
  color: #666;
`;
const CListrow = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
`;