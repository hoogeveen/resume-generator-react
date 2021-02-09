import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-left: 1px solid #EBEBEB;
    padding-left: 2em;
`

export default ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}
