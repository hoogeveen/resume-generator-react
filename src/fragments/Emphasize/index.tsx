import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const Emphasize = styled.p`
    color: #329CB9
`

export const EmphasizeComponent = ({ children }: { children: ReactNode }) => {
    return (
        <Emphasize>{ children }</Emphasize>
    )
}
