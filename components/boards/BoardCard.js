import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.li`
  width: 23.5%;
  margin: 0 2% 2% 0;
  box-sizing: border-box;
  cursor: pointer;

  & a {
    position: relative;
    padding: 8px;
    display: block;
    border-radius: 3px;
  }
  & .card-fade {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  & .card-fade:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
  & .card-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80px;
  }
  & .card-details__title {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-height: 40px;
    line-height: 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
  }
  & .card-details__favorite {
    color: #f5f500;
    font-size: 12px;
    text-align: right;
  }
`;

function BoardCard(props) {
  const [over, setOver] = useState(false);

  function onMouseOver() {
    setOver(true);
  }
  function onMouseOut() {
    setOver(false);
  }

  return (
    <Card onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <a
        style={{
          backgroundColor: props.backgroundColor,
        }}>
        <div className="card-fade"></div>
        <div className="card-details">
          <div className="card-details__title">
            {props.title}
          </div>
          <div className="card-details__favorite">
            {over ? '즐겨찾기 해제' : '즐겨찾기'}
          </div>
        </div>
      </a>
    </Card>
  );
}

BoardCard.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  starred: PropTypes.bool,
};

export default BoardCard;
