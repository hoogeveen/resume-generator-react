import React from 'react'
import styled from  'styled-components'

const Paragraph = styled.p`
    margin: 0;
`

export default ({ children }) => {
    return (
        <Paragraph>{ children }</Paragraph>
    )
}
