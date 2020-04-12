import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonCloseIcon from '../../../public/btn-close--gray.svg'

const Container = styled.div`
  padding-bottom: 10px;
  box-sizing: border-box;
  position: absolute;
  top: 43px;
  background-color: #fbfbfb;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, .15), -3px -3px 10px 0px rgba(0, 0, 0, .15);
  border-radius: 3px;
`;

const Header = styled.header`
  margin-bottom: 5px;
  padding: 0 10px;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 16px 1fr 16px;
  height: 40px;
  border-bottom: 1px solid #dedede;

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

function PopupLayout({ style, children, title, onClickClose }) {
  return (
    <Container style={style}>
      { title && (
        <Header>
          <Title>
            <h1>{ title }</h1>
            <button onClick={onClickClose}>
              <img src={ButtonCloseIcon} />
            </button>
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
  title: PropTypes.string,
  onClickClose: PropTypes.func
};

export default PopupLayout;
