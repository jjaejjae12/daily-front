import styled from "@emotion/styled";

export const bg = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Wrapper = styled.div`
  width: 518px;
  height: 354px;
  background: #ffffff;
  border-radius: 10px;
  button {
    color: #000000;
    font-size: 22px;
    font-weight: 600;
    background: #ffd0d0;
    width: 372px;
    height: 56px;
    border-radius: 35px;
    border: none;
    cursor: pointer;
    :hover {
      background: #fcc4c4;
    }
  }
`;
