import styled from "styled-components";
import {Link} from 'gatsby'

export const PostItemLink = styled(Link)`
    background: #FFF;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    flex: 1 0 23%;
    margin: 1%;
    text-decoration: none;
    color: #232323;
    transition: ease-in-out 280ms;
    &:hover {
    transform: scale(1.03);
    }
    
    @media (max-width: 780px) {
      flex: 1 0 100%;
      margin: unset;
      margin-bottom: 2%;
    }
`

export const PostItemWrapper = styled.section`
  width: 100%;
  flex-wrap: wrap;
  display: flex;  
    display: flex;
    flex-direction: column;
`


export const PostItemHeader = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostItemImg = styled.div`
  width: 100%;
  height: 180px;
  background: #CCC;
`
export const PostItemTitle = styled.h1`
  width: 100%;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 8px;
`

export const PostItemDescription = styled.p`
  width: 100%;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: normal;
  opacity: 0.8;
  display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0px;
    overflow: hidden;
`


export const PostItemFooter = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`

export const PostItemTag = styled.div`
  width: fit-content;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: ${props => props.background ? props.background : '#1da1d2'};
`



