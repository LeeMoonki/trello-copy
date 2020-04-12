import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Layout from './PopupLayout';
import { logout, getUserName } from 'Api/auth';

const LogoutSection = styled.div`
  cursor: pointer;

  &:hover {
    background-color: rgba(200, 200, 200, .2);
  }

  & > span {
    display: inline-block;
    padding: 10px;
  }
`;

function ProfilePopup(props) {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    setUserName(getUserName());
  }, []);

  const onClickLogOut = () => {
    logout().then(res => {
      if (res.success) {
        Router.push('/login');
      }
    });
  };

  return props.show && (
    <Layout
      style={{ width: '300px', right: '3px' }}
      title={ userName }
      onClickClose={props.onClickClose}>
      <LogoutSection onClick={onClickLogOut}>
        <span>Log Out</span>
      </LogoutSection>
    </Layout>
  );
}

ProfilePopup.propTypes = {
  show: PropTypes.bool,
};

ProfilePopup.defaultProps = {
  show: false,
  onClickClose: () => {}
};

export default ProfilePopup;
