import styled from "styled-components";

export const Resul = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
`;
export const Com = styled.div`
  diaplay: flex;
  justify-content: space-between;
  color: red;
`;
export const Head = styled.div`
  background-color: cyan;
  text-transform: upperCase;
  font-weight: 600;
  color: blue;
  padding: 5px;
`;
export const Main = styled.div`
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;
