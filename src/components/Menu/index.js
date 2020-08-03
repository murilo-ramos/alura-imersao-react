import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/lauraflix_logo.png'
import Button from '../Button'
import { LogoImage, MenuWrapper } from './style.js'

function Menu() {
    return (
        <MenuWrapper>
            <Link to="/">
                <LogoImage src={Logo} alt="LauraFlix Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video">
                Novo vídeo
            </Button>
        </MenuWrapper>
    )   
}

export default Menu;