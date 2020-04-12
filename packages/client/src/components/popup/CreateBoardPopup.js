import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from './PopupLayout';
import { useDispatch } from 'react-redux';
import { showWindowCover } from 'Reducers/app';

const ContentRow = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(200, 200, 200, .2);
  }
`;

const Title = styled.h1`
  color: #343477;
`;

const Content =styled.div`
  width: 100%;
  & > p {
    word-break: break-word;
    font-size: 12px;
    color: #777;
  }
`;

function CreateBoardPopup(props) {
  const dispatch = useDispatch();
  const onClickCreate = () => {
    dispatch(showWindowCover());
    props.onClickClose();
  };

  return props.show && (
    <Layout
      style={{ width: '300px', right: '3px' }}
      title="Create"
      onClickClose={props.onClickClose}>
      <ContentRow onClick={onClickCreate}>
        <Title>Create Board...</Title>
        <Content>
          <p>A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</p>
        </Content>
      </ContentRow>
    </Layout>
  );
}

CreateBoardPopup.propTypes = {
  show: PropTypes.bool,
};

CreateBoardPopup.defaultProps = {
  show: false,
  onClickClose: () => {}
};

export default CreateBoardPopup;
