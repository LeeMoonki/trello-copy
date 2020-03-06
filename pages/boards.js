import Head from 'next/head';
import styled from 'styled-components';

function Boards({ name }) {
  return (
    <div>
      <Head>
        <title>boards</title>
      </Head>
      <div>user name : {name}</div>
    </div>
  );
}

Boards.getInitialProps = async ctx => {
  return {
    name: ctx.req.params && ctx.req.params.id
  };
};

export default Boards;
