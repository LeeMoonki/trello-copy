import styled from 'styled-components';

const Content = styled.main`
  overflow: hidden;
  height: 100%;
`;

function NoHeaderLayout({ children }) {
  return (
    <>
      <Content>
        { children }
      </Content>
    </>
  );
}

export default NoHeaderLayout;
