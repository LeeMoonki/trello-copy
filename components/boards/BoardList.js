import styled from 'styled-components';
import PropTypes from 'prop-types';

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
const BoardCard = styled.li`
  width: 23.5%;
  margin: 0 2% 2% 0;
  box-sizing: border-box;
  cursor: pointer;

  & a {
    padding: 8px;
    display: block;
    border-radius: 3px;
  }
  & .card-details {
    height: 80px;
  }
`;

function BoardList(props) {
  return (
    <Container>
      <Header><h3>{props.title}</h3></Header>
      <div>
        <BoardCardList>
          {props.cards.map((card, index) => {
            return <BoardCard key={index}>
              <a
                style={{
                  backgroundColor: card.backgroundColor,
                }}>
                <div className="card-details">
                  {card.title}
                </div>
              </a>
            </BoardCard>
          })}
        </BoardCardList>
      </div>
    </Container>
  );
}

BoardList.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    starred: PropTypes.bool,
  })),
};

BoardList.defaultProps = {
  cards: [],
};

export default BoardList;
