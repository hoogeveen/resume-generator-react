import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const Container = styled.div`
    border-left: 1px solid #EBEBEB;
    padding-left: 2em;
`

export const LineComponent = ({ children }: { children: ReactNode }) => {
    return (
        <Container>{children}</Container>
    )
}
