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

    const renderExperience = data.map(experience => {

        const company = !experience.company ? null
            : experience.company.website ? <a target={'_blank'} href={experience.company.website}>{experience.company.name}</a>
            : experience.company.name

        return (
            <Spacing small>
                <ExperienceTitle>{experience.title} {experience.company && <> @ {company} </>} </ExperienceTitle>
                <ExperienceDate>{experience.date.start} - {experience.date.end}</ExperienceDate>
                <ExperienceParagraph>{experience.description}</ExperienceParagraph>
            </Spacing>
        )
    })

    return (
        <Spacing>
            <SectionHeader>Experience</SectionHeader>
            <Line>
                {renderExperience}
            </Line>
        </Spacing>
    )
}
