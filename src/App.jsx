import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  return (
    <>
      <CInputarea>
        <CInput placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <CButton onClick={onClickAdd}>追加</CButton>
      </CInputarea>
      <CIncompletearea>
        <CTitle>未完了のTODO</CTitle>
        <ul>
          {incompleteTodos.map((todo, index) => {
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
      <CCompletearea>
        <CTitle>完了のTODO</CTitle>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <CListrow key={todo}>
                  <CLi>{todo}</CLi>
                  <CButton onClick={() => onClickBack(index)}>戻す</CButton>
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