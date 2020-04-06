import styled from 'styled-components';
import Router from 'next/router';
import { getUserName } from 'Api/auth';
import Layout from 'Components/NoHeaderLayout';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > p {
    color: #121212;
    font-size: 20px;
    font-weight: bold;
  }
`;

const GoToHomeButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  color: #fff;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 3px;
`;

function Error({ statusCode }) {
  const onClickHome = () => {
    const name = getUserName();

    if (name) {
      const url = '/';

      Router.push(url, url, { getInitialProps: true });
    }
  };

  return (
    <Layout>
      <Content>
        <p>The error has occurred {statusCode && `with ${statusCode}`}</p>
        <GoToHomeButton onClick={onClickHome}>Go to Home</GoToHomeButton>
      </Content>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
