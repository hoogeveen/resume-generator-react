import React from 'react'
import styled from 'styled-components'
import Spacing from '../../fragments/Spacing'
import SectionHeader from '../../fragments/SectionHeader'
import Line from '../../fragments/Line'
import { workExperience } from '../../types'

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


export default ({ data }: { data: workExperience[] }) => {

    const renderExperience = data.map(experience => {

        const company = !experience.company ? null
            : experience.company.website ? <a target={'_blank'} href={experience.company.website}>{experience.company.name}</a>
            : experience.company.name

        return (
            <Spacing small>
                <ExperienceTitle>{experience.jobTitle} {experience.company && <> @ {company} </>} </ExperienceTitle>
                { experience.date && <ExperienceDate>{experience.date.start.toDateString()} - {experience.date.end.toDateString()}</ExperienceDate>}
                <ExperienceParagraph>{experience.jobDescription}</ExperienceParagraph>
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
