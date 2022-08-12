import React from 'react';
import fampayLogo from '../../assets/images/fampaylogo.svg';
import { HeaderStyle, Logo } from './Header.styles';

const Header = () => (
    <HeaderStyle>
        <Logo src={fampayLogo} alt="fampay logo" />
    </HeaderStyle>
);

export default Header;
