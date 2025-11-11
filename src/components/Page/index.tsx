import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const Page = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1250px;
    box-shadow: -25px 25px 25px 0 rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.background};
    border: #FFFFFF;
`

export const PageComponent = ({ children }: { children?: ReactNode }) => {
    return (
        <Page>
            {children}
        </Page>
    )
}
