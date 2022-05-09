import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(['あああああ','いいいいい']);
  const [completeTodos, setCompleteTodos] = useState(['ううううう']);
  return (
    <>
      <CInputarea>
        <CInput placeholder="TODOを入力" />
        <CButton>追加</CButton>
      </CInputarea>
      <CIncompletearea>
        <CTitle>未完了のTODO</CTitle>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <CListrow key={todo}>
                <CLi>{todo}</CLi>
                <CButton>完了</CButton>
                <CButton>削除</CButton>
              </CListrow>
            );
          })}
        </ul>
      </CIncompletearea>
      <CCompletearea>
        <CTitle>完了のTODO</CTitle>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <CListrow key={todo}>
                  <CLi>{todo}</CLi>
                  <CButton>戻す</CButton>
                </CListrow>
              );
            })}
          </ul>
      </CCompletearea>
    </>
  );
};

const CInput = styled.input`
  border-radius: 16px;
  border: nonel
  padding: 6px 16px;
  outline: none;
`;
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
const CInputarea = styled.div`
  background: #c1ffff;
  width: 400px;
  height: 30px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
`;
const CIncompletearea = styled.div`
  background: #c6ffe2;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
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