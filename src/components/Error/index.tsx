import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    background-color: #fef2f2;
    color: #dc2626;
    font-family: "Source Sans Pro", sans-serif;
`

const ErrorTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #dc2626;
`

const ErrorMessage = styled.div`
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
    max-width: 800px;
    width: 100%;
    font-family: monospace;
    white-space: pre-wrap;
    overflow-x: auto;
`

const ErrorDetails = styled.div`
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #7f1d1d;
`

export const ErrorComponent = ({ 
    title, 
    message, 
    details 
}: { 
    title: string; 
    message: string; 
    details?: ReactNode 
}) => {
    return (
        <ErrorContainer>
            <ErrorTitle>{title}</ErrorTitle>
            <ErrorMessage>{message}</ErrorMessage>
            {details && <ErrorDetails>{details}</ErrorDetails>}
        </ErrorContainer>
    )
} 