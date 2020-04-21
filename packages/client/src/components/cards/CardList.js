import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MoreIcon from '../../../public/more.svg';

const Wrapper = styled.div`
  overflow: hidden;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CardName = styled.div`
  width: 100%;

  &.changing > span {
    display: none;
  }
  &.changing > input {
    display: block;
  }
  & > span {
    display: block;
    line-height: 32px;
  }
  & > input {
    display: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 32px;
    font-size: 14px;
    border: 0;
    background-color: #fff;
    box-shadow: none;
  }
`;
const BtnMore = styled.button`
  flex-shrink: 0;
  margin-left: 3px;
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
  const refListNameIpt = useRef(null);

  const [listName, setListName] = useState(props.name);
  const [changingListName, setChangingListName] = useState(false);
  const onClickListName = () => {
    setChangingListName(true);
  };
  const onBlurListName = () => {
    setChangingListName(false);
  };
  useEffect(() => {
    if (changingListName) {
      const input = refListNameIpt.current;

      input.focus();
      input.value = listName;
    }
  }, [changingListName]);


  return (
    <Wrapper>
      <Container>
        <Header>
          <CardName onClick={onClickListName} className={changingListName ? 'changing' : null}>
            <span>{listName}</span>
            <input
              ref={refListNameIpt}
              onBlur={onBlurListName}
              onChange={e => setListName(e.target.value)}
            />
          </CardName>
          <BtnMore/>
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
