import React from 'react'
import styled from  'styled-components'

const Emphasize = styled.p`
    color: #329CB9
`

export default ({ children }) => {
    return (
        <Emphasize>{ children }</Emphasize>
    )
}
