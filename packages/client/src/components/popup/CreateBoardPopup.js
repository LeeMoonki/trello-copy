import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from './PopupLayout';

function CreateBoardPopup(props) {
  return props.show && (
    <Layout
      style={{ width: '300px', right: '3px' }}
      title="Create">
    
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
