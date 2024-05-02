import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  background-color: white;
  margin-top: 50px;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  /** useNavigate는 페이지를 이동할 때 사용된다.
   *  Link를 사용해도 페이지를 이동할 수 있지만 단순하게 이동만 하는 경우에 Link를 사용하면 좋고
   *  특정 이벤트가 실행됐을 때 동작하거나 추가적인 로직이 필요한 경우 useNavigate를 사용하면 좋다.
   */
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      /**
       * Firebase - GitHub auth provider.
       * GitHub에는 OAuth 2.0 리디렉션이 필요하므로 리디렉션(signInWithRedirect 핸들러)을 직접 처리하거나 signInWithPopup 핸들러를 사용할 수 있다.
       */
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
      Continue with Github
    </Button>
  );
}
