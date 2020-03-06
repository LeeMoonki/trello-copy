import { useRouter } from 'next/router';
import '../reset.css';
import styled from 'styled-components';
import Theme from '../theme';

const Container = styled.div``;
const Header = styled.div`
  padding: 4px;
  height: 32px;
  background-color: ${props => props.theme.colors.primary};
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-start;

  & > * {
    margin-right: 4px;
    height: 32px;
    line-height: 32px;
    font-weight: bold;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
`;
const A = styled.a`
  padding: 0px 8px;
`;
const Button = styled.button`
  & > span {
    padding: 0px 8px;
  }
`;
const Footer = styled.div``;


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  function onClickHome(e) {
    e.preventDefault();
    // router.push('/'); // server의 '/' 경로를 타는게 아니라 pages에서 page(index.js)를 찾는다.
  }

  return (
    <Theme>
      <Container id="trello-container">
        <Header id="header">
          <Left>
            <A href="/" onClick={onClickHome}>
              <span>Home</span>
            </A>
            <Button>
              <span>Boards</span>
            </Button>
          </Left>
        </Header>
        <Component {...pageProps} />
        <Footer id="footer"></Footer>
      </Container>
    </Theme>
  );
  
  
}

export default MyApp;
