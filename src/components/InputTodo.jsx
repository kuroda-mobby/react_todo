import React from "react";
import styled from "styled-components";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return(
    <CInputarea>
      <CInput placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <CButton onClick={onClick}>追加</CButton>
    </CInputarea>
  );
};

const CInputarea = styled.div`
  background: #c1ffff;
  width: 400px;
  height: 30px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
`;
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