import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;
const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 42px;
`;
const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export default function CreateAccount() {
  return (
    <Wrapper>
      <Form>
        <Input name="name" placeholder="Name" type="text" required />
        <Input name="email" placeholder="Email" type="email" required />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value="Create Account" />
      </Form>
    </Wrapper>
  );
}
