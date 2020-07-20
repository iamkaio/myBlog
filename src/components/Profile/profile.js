import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import {
    ProfileWrapper,
    ButtonGroup
} from './style';
import MenuLinks from "../MenuLinks/MenuLinks";


const Profile = () => {

    const {
        site: {
            siteMetadata: {author, position},
        }
    } = useStaticQuery(graphql`
        query siteMetadata {
          site {
            siteMetadata {
              author,
              position,
            }
          }
        }
    `)
    return(
        <ProfileWrapper>
            <h1>{author}</h1>
            <h2>{position}</h2>

            <ButtonGroup>

                <MenuLinks/>
            </ButtonGroup>

        </ProfileWrapper>
    )
}

export default Profile