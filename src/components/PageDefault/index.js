import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from './style.js'
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    /*background-color: var(--black);*/
    /*color: var(--white);*/
    flex: 1;
    /*padding-top: 94px;*/
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }) {
    return (
        <PageWrapper>
            <Menu/>
            <Main>
               {children}
            </Main>
            <Footer/>
        </PageWrapper>
    );
}

export default PageDefault;