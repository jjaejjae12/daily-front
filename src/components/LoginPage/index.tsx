import Link from "next/link";
import { useState } from "react";
import ApproveMail from "../ApproveMail";
import * as S from "./style";

export default function LoginPage() {
  const [loginInput, setLoginInput] = useState({ id: "", password: "" });
  const { id, password } = loginInput;

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <S.Wrapper>
        <S.Layer>
          <h1>Login</h1>
          <S.InputForm>
            <S.InputLayer>
              <S.InputName>E-mail</S.InputName>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                value={id}
                name="id"
                onChange={onChangeInput}
              />
            </S.InputLayer>
            <S.InputLayer>
              <S.InputName>Password</S.InputName>
              <input
                type="password"
                placeholder="이메일을 입력하세요"
                value={password}
                name="password"
                onChange={onChangeInput}
              />
            </S.InputLayer>
            <Link href="/">Forgot Password?</Link>
            <button value="Login">Login</button>
          </S.InputForm>
        </S.Layer>
        <S.SideWave
          fill="#FCE9E9"
          paused={false}
          options={{
            height: 60,
            amplitude: 150,
            speed: 0.15,
            points: 2,
          }}
        ></S.SideWave>
        <S.SideWave
          fill="#FCC4C4"
          paused={false}
          options={{
            height: 60,
            amplitude: 150,
            speed: 0.15,
            points: 2,
          }}
        ></S.SideWave>
      </S.Wrapper>
      <ApproveMail />
    </>
  );
}
