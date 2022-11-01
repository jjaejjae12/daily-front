import styled from "@emotion/styled";
import Wave from "react-wavify";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f9f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideWave = styled(Wave)`
  position: fixed;
  transform-origin: bottom;
  bottom: 0;
  height: 30vh;
`;

export const Layer = styled.div`
  width: 518px;
  height: 662px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 36px;
    line-height: 49px;
    color: #000000;
    text-align: center;
  }
`;

export const InputForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  a {
    width: 372px;
    padding-top: 10px;
    text-align: start;
    font-size: 16px;
    color: #1b7dc5;
    cursor: pointer;
    line-height: 21px;
  }
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

export const InputLayer = styled.div`
  width: 372px;
  input {
    width: 100%;
    height: 50px;
    border-style: none;
    border-bottom: 1px solid #ffd0d0;
    outline: none;
    font-size: 20px;
    ::placeholder {
      font-size: 18px;
      color: #c4c4c4;
      font-weight: 300;
    }
  }
`;

export const InputName = styled.p`
  color: #1c1c1e;
  font-size: 20px;
`;
