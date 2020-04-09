import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from './PopupLayout';

const ContentRow = styled.div`
  padding: 5px 10px;
  width: 100%;
  height: 150px;
  cursor: pointer;
  &:hover {
    background-color: rgba(200, 200, 200, .2);
  }
`;

const Title = styled.h1`
  
`;

const Content =styled.div`
  & > p {
      
  }
`;

function CreateBoardPopup(props) {
  return props.show && (
    <Layout
      style={{ width: '300px', right: '3px' }}
      title="Create">
      <ContentRow>
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
};

export default CreateBoardPopup;
