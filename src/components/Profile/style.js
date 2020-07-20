import styled from 'styled-components';

export const ProfileWrapper = styled.section`
    width: 80%;
    padding: 5% 0;
    
    h1 {
      font-size: 52px;
      font-weight: bold;
    }
    h2 {
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: 0.5;
    }
    
`
export const ButtonGroup = styled.section`
    width: 100%;
    margin: 2% 0 5% 0;
    
    button {
    border: 2px solid #232323;
    background: transparent;
    padding: 15px 0;
    width: 100px;
    font-family: 'Poppins';
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: ease-in-out 280ms;
    &:hover {
      background: #232323;
      color: #FFF;
    }
    }    
`