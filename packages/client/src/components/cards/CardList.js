import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MoreIcon from '../../../public/more.svg';
import PlusIcon from '../../../public/plus.svg';

const Wrapper = styled.div`
  overflow: hidden;
  display: inline-block;
  width: 272px;
  margin: 0 4px;
  height: 100%;
  max-height: 100%;
  
  & .noselect {
    user-select: none;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  background-color: #ebebeb;
  border-radius: 3px;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px 4px 12px;
  width: 100%;
  cursor: pointer;
`;
const CardName = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

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
    font-weight: bold;
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

const Content = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
`;

const Footer = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  padding: 6px 8px 8px;
`;
const AddCard = styled.a`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  padding: 4px 5px;
  color: #5e6c84;
  border-radius: 3px;
  cursor: pointer;

  & > span:last-child {
    margin-left: 5px;
  }

  &:hover {
    color: #3b4a62;
    background-color: #dadada;
  }
`;
const BtnPlus = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(${PlusIcon});
  background-repeat: no-repeat;
  background-position: center;
`;
const BtnTemplate = styled.div`
  margin-left: 5px;
  padding: 4px 5px;
  border-radius: 3px;
  cursor: pointer;

  & > span {
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
  }

  &:hover {
    color: #3b4a62;
    background-color: #dadada;
  }
`;

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

  const onDrag = e => {
    e.preventDefault();

    const startX = e.clientX;

    document.onmousemove = e => {

      props.onDrag && props.onDrag({
        start: startX,
        current: e.clientX,
        relativeX: e.clientX - startX
      });
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };


  return (
    <Wrapper>
      <Container>
        <Header onMouseDown={onDrag}>
          <CardName onClick={onClickListName} className={changingListName ? 'changing' : null}>
            <span className="noselect">{listName}</span>
            <input
              ref={refListNameIpt}
              onBlur={onBlurListName}
              onChange={e => setListName(e.target.value)}
            />
          </CardName>
          <BtnMore />
        </Header>
        <Content>
          {/* <div style={{height: 800, backgroundColor: '#f00'}}></div> */}
        </Content>
        <Footer>
          <AddCard>
            <BtnPlus />
            <span className="noselect">Add another card</span>
          </AddCard>
          <BtnTemplate>
            <span className="noselect">t</span>
          </BtnTemplate>
        </Footer>
      </Container>
    </Wrapper>
  );
}

CardList.propTypes = {
  name: PropTypes.string.isRequired,
  onDrag: PropTypes.func,
};

CardList.defaultProps = {
};

export default CardList;
