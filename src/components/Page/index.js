import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    box-shadow: -25px 25px 25px 0 rgba(0, 0, 0, 0.15);
    background-color: #FEFEFE;
    border: #FFFFFF;
`

export default ({ children }) => {
    return (
        <Page>
            {children}
        </Page>
    )
}
