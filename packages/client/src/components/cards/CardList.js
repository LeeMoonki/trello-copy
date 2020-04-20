import styled from 'styled-components';
import PropTypes from 'prop-types';
import MoreIcon from '../../../public/more.svg';

const Wrapper = styled.div`
  display: inline-block;
  width: 272px;
  margin: 0 4px;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: colunm;
  padding: 12px 8px;
  max-height: 100%;
  background-color: #ebebeb;
  border-radius: 3px;
`;

const Header = styled.div`
  width: 100%;
`;
const CardName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    display: block;
    line-height: 32px;
  }
`;
const BtnMore = styled.button`
  width: 32px;
  height: 32px;
  background-image: url(${MoreIcon});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 3px;

  &:hover {
    background-color: #dadada;
  }
`;

const Footer = styled.div``;

function CardList(props) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <CardName>
            <span>{props.name}</span>
            <BtnMore/>
          </CardName>
        </Header>
        <Footer></Footer>
      </Container>
    </Wrapper>
  );
}

CardList.propTypes = {
  name: PropTypes.string.isRequired
};

CardList.defaultProps = {};

export default CardList;
