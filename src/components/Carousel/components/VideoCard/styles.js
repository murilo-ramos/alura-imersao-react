import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`
  width: 293px;
  height: 197px;
  border: 2px solid;
  
  text-decoration: none;

  overflow: hidden;
  cursor: pointer;
  color: white;
  
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover; /* ocupa todo tamanho */
  background-position: center;
  border-radius: 10px;
  
  display: inline-block;
  position: relative;
  display: flex;
  align-items: flex-end;
  flex: 0 0 298px;

  padding: 16px;

  transition: opacity .3s;

  &:after {
    content: "";
    display: block;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    margin: auto;
    opacity: 0;
  }

  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
    h2 {
      opacity: 1;
    }
  }
  
  h2 {
    position: relative;
    z-index: 2;
    opacity: 0;
    transition: opacity .3s;
  }
`;
