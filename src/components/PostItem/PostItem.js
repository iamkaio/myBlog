import React from "react";
import PropTypes from 'prop-types'


import {
    PostItemLink,
    PostItemWrapper,
    PostItemHeader,
    PostItemTitle,
    PostItemDescription,
    PostItemFooter,
    PostItemTag,
    PostItemImg

} from "./styles";


const PostItem = ({slug, category, title, description, background, date}) => (


    <PostItemLink data-aos="fade-in" to={slug}>
        <PostItemWrapper>
            <PostItemHeader>
                <PostItemImg>
                </PostItemImg>
                <PostItemTitle>
                    {title}
                </PostItemTitle>
                <PostItemDescription>
                    {description}
                </PostItemDescription>
            </PostItemHeader>
            <PostItemFooter>
                <PostItemTag background={background}>
                    {category}
                </PostItemTag>
            </PostItemFooter>
        </PostItemWrapper>
    </PostItemLink>
)

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.string,
    date: PropTypes.string,
}

export default PostItem