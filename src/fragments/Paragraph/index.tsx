import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const Paragraph = styled.p`
    margin: 0;
`

export const ParagraphComponent = ({ children }: { children: ReactNode }) => {
    return (
        <Paragraph>{ children }</Paragraph>
    )
}
