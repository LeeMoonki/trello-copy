import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { showWindowCover } from 'Reducers/app';
import { toggleFavorite } from 'Reducers/board';

const showup = keyframes`
  from {
    right: -50px;
  }
  to {
    right: 0px;
  }
`;

const Card = styled.li`
  width: 23%;
  margin: 0 2% 2% 0;
  box-sizing: border-box;
  cursor: pointer;

  & .card-details--empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    text-align: center;
    color: #172b4d;
  }

  & a {
    overflow: hidden;
    position: relative;
    padding: 8px;
    display: block;
    border-radius: 3px;
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
  & .card-details__btn-favorite {
    position: relative;
  }
  & .card-details__btn-favorite--over {
    right: 0px;
    animation-duration: 300ms;
    animation-name: ${showup};
  }
  & .card-details__btn-favorite--out {
    right: -50px;
  }
`;

function BoardCard(props) {
  const dispatch = useDispatch();
  const [over, setOver] = useState(false);

  function onMouseOver() {
    setOver(true);
  }
  function onMouseOut() {
    setOver(false);
  }

  const onClickCard = e => {
    e.preventDefault();
    if (props.empty) {
      dispatch(showWindowCover());
    } else {
      // push to Board page
      console.log('push');
    }
  };

  const onClickFavorite = e => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(toggleFavorite({ boardId: props.boardId }));
    console.log('favorite');
  };

  return (
    <Card>
      <a
        href={`/b/${props.boardId}/${props.title}`}
        style={{
          backgroundColor: props.backgroundColor,
        }}
        onClick={onClickCard}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {props.empty
        ? (
          <div className="card-details--empty">
            <p>
              Create new board
            </p>
          </div>
        )
        : (
          <div className="card-details">
            <div className="card-details__title">
              {props.title}
            </div>
            <div className="card-details__favorite">
              <span
                className={
                  !props.favorite
                  ? `card-details__btn-favorite ${over ? 'card-details__btn-favorite--over' : 'card-details__btn-favorite--out'}`
                  : ''
                }
                onClick={onClickFavorite}
              >
                {props.favorite ? (over ? '즐겨찾기 해제' : '즐겨찾기') : '즐겨찾기'}
              </span>
            </div>
          </div>
        )}
      </a>
    </Card>
  );
}

BoardCard.propTypes = {
  title: PropTypes.string,
  boardId: (props, propName, componentName) => {
    if (!props.empty && (typeof props[propName] !== 'string' || !props[propName].trim())) {
      return new Error(`Warning: Failed prop type: The prop '${propName}' is marked as required in '${componentName}', but its value is '${props[propName]}'`);
    }
  },
  backgroundColor: PropTypes.string,
  favorite: PropTypes.bool,
  empty: PropTypes.bool,
};

BoardCard.defaultProps = {
  backgroundColor: 'rgba(9, 30, 66, 0.04)',
  empty: false,
};

export default BoardCard;
