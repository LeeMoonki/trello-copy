import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonCloseIcon from '../../../public/btn-close--gray.svg'

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 43px;
  padding: 10px;
  background-color: #fbfbfb;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, .15), -3px -3px 10px 0px rgba(0, 0, 0, .15);
  border-radius: 3px;
`;

const Header = styled.header`
  padding: 0 10px;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 16px 1fr 16px;
  height: 40px;

  & > h1 {
    line-height: 40px;
    text-align: center;
    grid-column: 2 / 3;
  }

  & > button {
    justify-self: end;
    & > img {
      width: 16px;
      height: 16px;
    }
  }
`;

const Content = styled.div``;

function PopupLayout({ style, children, title }) {
  return (
    <Container style={style}>
      { title && (
        <Header>
          <Title>
            <h1>{ title }</h1>
            <button><img src={ButtonCloseIcon} /></button>
          </Title>
        </Header>
      )}
      <Content>
        { children }
      </Content>
    </Container>
  );
}

PopupLayout.propTypes = {
  title: PropTypes.string
};

export default PopupLayout;
