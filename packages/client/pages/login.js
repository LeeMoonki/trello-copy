import Head from 'next/head';
import { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Layout from 'Components/NoHeaderLayout';
import { login } from 'Api/auth';

const Container = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
`;

const Header = styled.div`
  overflow: hidden;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.primary};

  & > span {
    display: inline-block;
    margin: 40px auto;
  }
`;

const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const LoginCard = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 25px 40px;
  width: 400px;
  height: 420px;
  background-color: #fff;
  box-shadow: 2px 2px 10px #dedede;

  & > h1 {
    margin: 10px 0 25px;
    font-size: 18px;
    font-weight: 500;
    color: #343434;
    text-align: center;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  font-size: 14px;

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
  }
`;

const Message = styled.div`
  overflow: hidden;
  margin-bottom: 12px;
  width: 100%;

  & > span {
    display: inline-block;
    padding: 7px 10px;
    background-color: #fa325a;
    color: #fff;
    border-radius: 3px;
  }
`;

const BtnLogin = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 30px;
  background-color: #5aac44;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
  text-align: center;

  &:hover {
    background-color: #6bbd55;
  }
`;

function Login() {
  const [email, setEmail] = useState('test@trellocopy.com');
  const [password, setPassword] = useState('test1234');
  const [message, setMessage] = useState('');

  const onEnterEmail = e => {
    if (e.keyCode === 13) {
      if (email && !password) {
        const pwdEle = document.querySelector('input[name="password"]');

        pwdEle.focus();
      }
    }
  };

  const onEnterPassword = e => {
    if (e.keyCode === 13) {
      if (password && !email) {
        const emailEle = document.querySelector('input[name="email"]');

        emailEle.focus();
      }
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    if (email && password) {
      login({ email, password })
        .then(res => {
          if (res.success) {
            const url = `/${res.data.name}/boards`;

            Router.push(url, url, { getInitialProps: true });
          } else {
            setMessage('Incorrect email address and / or password.');
          }
        });
    }
  };

  return (
    <>
      <Head>
        <title>Log in to Trello</title>
      </Head>
      <Layout>
        <Container>
          <Header>
            <span>TrelloCopy</span>
          </Header>
          <LoginCardContainer>
            <LoginCard>
              {message && (
                <Message>
                  <span>{ message }</span>
                </Message>
              )}
              <h1>Log In</h1>
              <form id="login" method="POST" onSubmit={onSubmit}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Enter meail"
                  spellCheck={false}
                  inputmode="email"
                  autoFocus={true}
                  value={email}
                  onChange={e => { setMessage(''); setEmail(e.target.value); }}
                  onKeyDown={onEnterEmail}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={e => { setMessage(''); setPassword(e.target.value); }}
                  onKeyDown={onEnterPassword}
                />
                
                <BtnLogin type="submit">Log In</BtnLogin>
              </form>
            </LoginCard>
          </LoginCardContainer>
        </Container>
      </Layout>
    </>
  );
}

export default Login;
