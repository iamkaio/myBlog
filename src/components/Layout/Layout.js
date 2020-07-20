import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header";
import GlobalStyles from "../../styles/global"
import {
    LayoutWrapper,
    LayoutMain
} from './style';



const Layout = ({children}) => {
    return (
        <LayoutWrapper>
            <GlobalStyles/>
            <Header />
            <LayoutMain>{children}</LayoutMain>
        </LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
