import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/lauraflix_logo.png';
import { LogoImage, MenuWrapper, ButtonLink } from './style';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="LauraFlix Logo" />
      </Link>

      <ButtonLink as={Link} to="/cadastro/video">
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;
