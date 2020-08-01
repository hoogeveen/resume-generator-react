import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import data from './data.json'
import Page from './components/Page'
import Personal from './components/Personal'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Education from './components/Education'
import Languages from './components/Languages'
import Skills from './components/Skills'

import { device } from './styles'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #FFF;
    @media ${device.laptop} {
        background-color: #329CB9;
        padding: 2em;
    }

    font-family: "Source Sans Pro", sans-serif;
    color: #303030;
  }

  a {
    text-decoration: none;
    color: #329CB9;
    &:hover {
        text-decoration: underline;
    }
  }

  p, li {
      color: #858585;
      line-height: 2;
  }
`

const Main =  styled.div`
    padding: 4em 2em 0em;
    @media ${device.laptop} {
        padding: 4em 4em 0em;
        flex: 70%;
    }

`

const Sidebar =  styled.div`
    padding: 0em 2em 0em;
    @media ${device.laptop} {
        padding: 4em 3em 0em;
        flex: 30%;
    }

    border-left: 1px solid #EBEBEB;
`

const Footer = styled.div`
    border-top: 1px solid #EBEBEB;
    padding: 2em 4em 2em;
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

export default () => {
    return (
        <>
        <GlobalStyle />
        <Page>
            <Info>
                <Main>
                    <Personal data={data.personal} />
                    <Profile data={data.profile} />
                    <Experience data={data.workExperience} />
                    <Education data={data.education} />
                </Main>
                <Sidebar>
                    <Skills data={data.skills} />
                    <Languages data={data.languages} />
                </Sidebar>
            </Info>
            <Footer>
            <p>{data.personal.firstName} {data.personal.lastName} ©{new Date().getFullYear()} - All rights reserved | Visit the project at <a href={'https://github.com/hoogeveen/resume-generator'} target={'_blank'}>Github</a></p>
            </Footer>
        </Page>
        </>
    )

}
