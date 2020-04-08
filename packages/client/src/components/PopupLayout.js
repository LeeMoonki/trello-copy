import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 43px;
  padding: 10px;
  background-color: #fbfbfb;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, .15), -3px -3px 10px 0px rgba(0, 0, 0, .15);
  border-radius: 3px;
`;

const Header = styled.header`
  
`;

function PopupLayout(props) {
  return props.show && (
    <Container style={props.style}>
      <Header></Header>
    </Container>
  );
}

PopupLayout.propTypes = {
  show: PropTypes.bool,
  style: PropTypes.object,
};

PopupLayout.defaultProps = {
  show: true,
  style: {},
};

export default PopupLayout;
