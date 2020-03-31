import Head from 'next/head';
import styled from 'styled-components';
import Layout from 'Components/NoHeaderLayout';

const Container = styled.div`
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

const BtnLogin = styled.button`
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
  const onSubmit = e => {
    e.preventDefault();
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
              <h1>Log In</h1>
              <form id="login" method="POST" onSubmit={onSubmit}>
                <Input
                  type="text"
                  name="id"
                  placeholder="Enter meail"
                  spellCheck={false}
                  inputmode="email"
                  autoFocus={true}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password"
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
