import React from 'react'
import styled from 'styled-components'

const Spacing = styled.div`
    margin-bottom: ${({ small }) => small ? 1 : 4 }em;

`

export default ({ children, small = false}) => {
    return (
        <Spacing small={small}>{ children }</Spacing>
    )
}
