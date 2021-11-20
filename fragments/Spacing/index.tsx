import React from 'react'
import styled from 'styled-components'

type SpacingProps = {
    small: boolean
}

const Spacing = styled.div<SpacingProps>`
    margin-bottom: ${({ small }) => small ? 1 : 4 }em;
`

export default ({ children, small = false}) => {
    return (
        <Spacing small={small}>{ children }</Spacing>
    )
}
