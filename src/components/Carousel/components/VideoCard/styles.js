import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  width: 293px;
  height: 197px;
  border: 2px solid;
  
  text-decoration: none;

  /*overflow: hidden;*/
  cursor: pointer;
  /*color: white;*/
  
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover; /* ocupa todo tamanho */
  background-position: center;
  border-radius: 10px;
  
  display: inline-block;
  /*position: relative;
  display: flex;
  align-items: flex-end;
  flex: 0 0 298px;

  padding: 16px;*/

  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
  /*
  &:not(:first-child) {
    margin-left: 20px;
  }
  */
`;
