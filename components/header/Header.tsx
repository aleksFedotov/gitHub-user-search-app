import React from 'react';

import Moon from '../../assets/icon-moon.svg';
import Sun from '../../assets/icon-sun.svg';

import { HeaderWrapper, Logo, ThemeSwither } from './HeaderStyles';

const Header: React.FC<{ theme: string; onChangeTheme: () => void }> = ({
  theme,
  onChangeTheme,
}) => {
  const themeChangehandler = () => {
    onChangeTheme();
  };
  return (
    <HeaderWrapper>
      <Logo>devfinder</Logo>
      <ThemeSwither onClick={themeChangehandler}>
        <p>{theme === 'dark' ? 'ligth' : 'dark'}</p>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </ThemeSwither>
    </HeaderWrapper>
  );
};

export default Header;
