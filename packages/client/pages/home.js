import Head from 'next/head';
import styled from 'styled-components';

const Content = styled.p`
  color: #7e3242;
  font-size: 15px;
  font-weight: bold;
`;

function Home() {
  return (
    <div>
      <Head>
        <title>home</title>
      </Head>
      <Content>This is home.</Content>
    </div>
  );
}

export default Home;
