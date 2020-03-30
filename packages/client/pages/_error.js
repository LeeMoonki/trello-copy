import styled from 'styled-components';
import Layout from 'Components/NoHeaderLayout';

const Content = styled.p`
  color: #7e3242;
  font-size: 15px;
  font-weight: bold;
`;

function Error({ statusCode }) {
  return (
    <Layout>
      <Content>The error has occurred {statusCode && `with ${statusCode}`}</Content>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
