import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from 'Components/MainLayout';

function Cards({ boardId, boardName }) {
  const [firstLoadingEnd, setFirstLoadingEnd] = useState(true);
  useEffect(() => {
    // GET card list
  }, []);


  return (
    <Layout>

    </Layout>
  );
}

Cards.getInitialProps = ctx => {
  return {
    boardId: ctx.req.params.id,
    boardName: ctx.req.params.name,
  };
};

export default Cards;
