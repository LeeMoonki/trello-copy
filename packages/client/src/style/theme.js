/**
 * File Name : theme.js
 * Description : styled components의 전역 스타일 정의
 * ------------------------------------
 * Author : LeeMoonki
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#026aa7',
  }
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;
