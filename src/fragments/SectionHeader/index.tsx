import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const SectionHeader = styled.h2`
    color: #329CB9;
    font-size: 1.3em;
    margin: 0 0 1em;
`

export const SectionHeaderComponent = ({ children }: { children: ReactNode }) => {
    return (
        <SectionHeader>{children}</SectionHeader>
    )
}
