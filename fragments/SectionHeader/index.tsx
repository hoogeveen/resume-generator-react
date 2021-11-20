import React from 'react'
import styled from 'styled-components'

const SectionHeader = styled.h2`
    color: #329CB9;
    font-size: 1.3em;
    margin: 0 0 1em;
`

export default ({ children }) => {
    return (
        <SectionHeader>{children}</SectionHeader>
    )
}
