import React from 'react'
import styled from 'styled-components'
import Spacing from '../../fragments/Spacing'
import SectionHeader from '../../fragments/SectionHeader'
import Line from '../../fragments/Line'

const ExperienceTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1em;
    font-weight: 600;
`

const ExperienceDate = styled.p`
    margin: 0;
    color: #329CB9
`

const ExperienceParagraph = styled.p`
    margin: 0;
`


export default ({ data }) => {

    const renderEducation = data.map(education => {

        return (
            <Spacing small>
                <ExperienceTitle>{education.title} </ExperienceTitle>
                <ExperienceDate>{education.date.start} {education.date.end}</ExperienceDate>
                <ExperienceParagraph>{education.institution.name}</ExperienceParagraph>
            </Spacing>
        )
    })

    return (
        <Spacing>
            <SectionHeader>Education</SectionHeader>
            <Line>
                {renderEducation}
            </Line>
        </Spacing>
    )
}
