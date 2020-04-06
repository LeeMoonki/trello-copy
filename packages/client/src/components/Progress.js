import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

// ref : https://loading.io/css/

const spinner = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ProgressCircle = styled.div`
  color: #dedede;
  display: inline-block;
  position: relative;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

  & div {
    transform-origin: ${props => `${props.size / 2}px`} ${props => `${props.size / 2}px`};
    animation: ${spinner} 1.2s linear infinite;
  }

  & div:after {
    content: " ";
    display: block;
    position: absolute;
    top: ${props => `${props.padding || props.size * (3 / 80)}px`};
    left: ${props => `${(props.size - (props.width || props.size * (6 / 80))) / 2}px`};
    width: ${props => `${props.width || props.size * (6 / 80)}px`};
    height: ${props => `${props.height || props.size * (18 / 80)}px`};
    border-radius: 20%;
    background: ${props => `${props.color}`};
  }

  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1.0s;
  }
  & div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  & div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
`;

function Progress(props) {
  return (
    <ProgressCircle {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </ProgressCircle>
  );
}

Progress.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
  padding: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Progress.defaultProps = {
  size: 80,
  color: '#dedede',
};

export default Progress;
