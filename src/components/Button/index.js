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
        opacity: .5;
        cursor: pointer;
    }
`;

export default Button;
