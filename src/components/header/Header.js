import React from 'react';
import fampayLogo from '../../assets/images/fampaylogo.svg';
import { HeaderStyle } from './Header.styles';

const Header = () => (
    <HeaderStyle>
        <img src={fampayLogo} alt="fampay logo" />
    </HeaderStyle>
);

export default Header;
