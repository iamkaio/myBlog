import styled from "styled-components";
import {Link} from  'gatsby'

export const MenuLinksWrapper = styled.nav`
  margin-top: 25px;

`

export const MenuLinksList= styled.ul`
display: flex;
width: 100%;
justify-content: flex-start;
  font-size: 1.2rem;
`

export const MenuLinksItem = styled.li`
margin-left: 15px;
&:first-child {
margin-left: 0;
}
.active {
  color: #1fa1f2;
}
`

export const MenuLinksLink = styled(Link) `
  color: #232323;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  transition: ease-in-out 220ms;
  
  &:hover{
    color: aqua;
  }
`
