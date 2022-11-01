import Link from "next/link";
import * as S from "./style";

export default function LoginPage() {
  return (
    <S.Wrapper>
      <S.Layer>
        <h1>Login</h1>
        <S.InputForm>
          <S.InputLayer>
            <S.InputName>E-mail</S.InputName>
            <input type="email" placeholder="이메일을 입력하세요" />
          </S.InputLayer>
          <S.InputLayer>
            <S.InputName>Password</S.InputName>
            <input type="password" placeholder="이메일을 입력하세요" />
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
  );
}
