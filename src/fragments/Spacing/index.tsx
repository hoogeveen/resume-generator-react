import styled from '@emotion/styled'
import type { ReactNode } from 'react'

type SpacingProps = {
    small: boolean
}

const Spacing = styled.div<SpacingProps>`
    margin-bottom: ${({ small }) => small ? 1 : 4 }em;
`

export const SpacingComponent = ({ children, small = false }: { children: ReactNode; small?: boolean }) => {
    return (
        <Spacing small={small}>{ children }</Spacing>
    )
}
