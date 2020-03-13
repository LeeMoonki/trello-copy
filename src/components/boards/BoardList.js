import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoardCard from './BoardCard';

const Container = styled.div`
  max-width: 1250px;
`;
const Header = styled.div`
  padding-bottom: 11px;

  & > h3 {
    overflow: hidden;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const BoardCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function BoardList(props) {
  return (
    <Container>
      <Header><h3>{props.title}</h3></Header>
      <div>
        <BoardCardList>
          {props.cards.map((card, index) => {
            return (
              <BoardCard
                key={index}
                title={card.title}
                boardId={card.boardId}
                backgroundColor={card.backgroundColor}
                starred={card.starred}
              />
            );
          })}
          {props.personal && (
            <BoardCard empty={true} />
          )}
        </BoardCardList>
      </div>
    </Container>
  );
}

BoardList.propTypes = {
  title: PropTypes.string.isRequired,
  personal: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    boardId: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    starred: PropTypes.bool,
  })),
};

BoardList.defaultProps = {
  personal: false,
  cards: [],
};

export default BoardList;
