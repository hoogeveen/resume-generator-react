import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { useState, useEffect } from 'react'

import { data } from './data'
import { ProfileDataSchema, type ProfileData } from './schema/Schema'
import { PageComponent } from './components/Page'
import { PersonalComponent } from './components/Personal'
import { ProfileComponent } from './components/Profile'
import { ExperienceComponent } from './components/Experience'
import { EducationComponent } from './components/Education'
import { LanguagesComponent } from './components/Languages'
import { SkillsComponent } from './components/Skills'
import { ProjectsComponent } from './components/Projects'
import { ErrorComponent } from './components/Error'
import { ThemeProvider, useTheme } from './theme/ThemeContext'
import { device } from './styles'
import type { Theme } from './theme/theme'

const getGlobalStyles = (theme: Theme) => css`
  body {
    padding: 0;
    margin: 0;
    background-color: ${theme.background};
    @media ${device.laptop} {
        background-color: ${theme.pageBackground};
        padding: 2em;
    }

    font-family: "Source Sans Pro", sans-serif;
    color: ${theme.text};
  }

  #root {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${theme.link};
    &:hover {
        text-decoration: underline;
    }
  }

  p, li {
    color: ${theme.secondaryText};
    line-height: 2;
    @media ${device.laptop} {
        white-space: pre-line;
    }
  }
`

const Main = styled.div`
    padding: 4em 2em 0em;
    @media ${device.laptop} {
        padding: 4em 4em 0em;
        flex: 70%;
    }
`

const Sidebar = styled.div`
    padding: 0em 2em 0em;
    @media ${device.laptop} {
        padding: 4em 3em 0em;
        flex: 30%;
    }

    border-left: 1px solid ${({ theme }) => theme.border};
`

const Footer = styled.div`
    border-top: 1px solid ${({ theme }) => theme.border};
    padding: 2em;
    @media ${device.laptop} {
        padding: 2em 4em 2em;
    }
    & p {
        margin: 0;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
        flex-direction: row;
    }
`

const AppContent = () => {
    const { theme } = useTheme()
    const [validatedData, setValidatedData] = useState<ProfileData | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        try {
            const parsedData = ProfileDataSchema.parse(data)
            setValidatedData(parsedData)
        } catch (validationError) {
            console.error('Data validation failed:', validationError)
            setError(validationError instanceof Error ? validationError.message : 'Unknown validation error')
        }
    }, [])

    if (error) {
        return (
            <>
                <Global styles={getGlobalStyles(theme)} />
                <ErrorComponent
                    title="Data Validation Error"
                    message="The resume data failed to validate against the schema. Please check the data structure and try again."
                    details={error}
                />
            </>
        )
    }

    if (!validatedData) {
        return (
            <>
                <Global styles={getGlobalStyles(theme)} />
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    minHeight: '100vh',
                    fontFamily: '"Source Sans Pro", sans-serif',
                    color: theme.text
                }}>
                    Loading...
                </div>
            </>
        )
    }

    return (
        <>
            <Global styles={getGlobalStyles(theme)} />
            <PageComponent>
                <Info>
                    <Main>
                        <PersonalComponent data={validatedData.personal} />
                        <ProfileComponent data={validatedData.profile} />
                        <ExperienceComponent data={validatedData.workExperience} />
                        <EducationComponent data={validatedData.education} />
                    </Main>
                    <Sidebar>
                        <ProjectsComponent data={validatedData.projects} />
                        <SkillsComponent data={validatedData.skills} />
                        <LanguagesComponent data={validatedData.languages} />
                    </Sidebar>
                </Info>
                <Footer>
                    <p>{validatedData.personal.firstName} {validatedData.personal.lastName} | Visit the project on <a href={'https://github.com/hoogeveen/resume-generator-react'} target={'_blank'}>Github</a></p>
                </Footer>
            </PageComponent>
        </>
    )
}

export default function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    )
}
