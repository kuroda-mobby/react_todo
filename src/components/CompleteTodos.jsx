import React from "react";
import styled from "styled-components";

export const CompleteTodos = (props) => {
  const {todos, onClickBack} = props;
  return(
    <CCompletearea>
      <CTitle>完了のTODO</CTitle>
      <ul>
        {todos.map((todo, index) => {
          return (
            <CListrow key={todo}>
              <CLi>{todo}</CLi>
              <CButton onClick={() => onClickBack(index)}>戻す</CButton>
            </CListrow>
          );
        })}
      </ul>
    </CCompletearea>
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

const CCompletearea = styled.div`
  background: #ffffe0;
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