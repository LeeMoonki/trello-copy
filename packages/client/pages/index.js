import { useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { checkLogin, getUserName } from 'Api/auth';
import Progress from 'Components/Progress';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function Index() {
  useEffect(() => {
    let url;
    if (checkLogin()) {
      url = `/${getUserName()}/boards`;
    } else {
      url = '/login';
    }

    Router.push(url, url, { getInitialProps: true });
  }, []);

  return (
    <Container>
      <Progress size="60" color="#000"></Progress>
    </Container>
  );
}

export default Index;
