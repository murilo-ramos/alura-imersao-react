import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 4px;
    font-weight: bold;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5
    }

    @media(max-width: 800px) {
        position: fixed;
        left: 0;
        right: bottom;
        bottom: 0;
        width: 100%;

        background-color: var(--primary);
        color: var(--white);
        outline: 0;
        text-align: center;
        border: 0;
        border-radius: 0;

    }
`;

export default Button;