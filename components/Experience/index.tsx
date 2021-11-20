import React from 'react'
import styled from 'styled-components'
import Spacing from '../../fragments/Spacing'
import SectionHeader from '../../fragments/SectionHeader'
import Line from '../../fragments/Line'
import { workExperience } from '../../types'
import Timespan from '../../fragments/Timespan'
import Paragraph from '../../fragments/Paragraph'
import Title from '../../fragments/Title'

export default ({ data }: { data: workExperience[] }) => {

    const renderExperience = data.map(experience => {

        const company = !experience.company ? null
            : experience.company.website ? <a target={'_blank'} href={experience.company.website}>{experience.company.name}</a>
            : experience.company.name

        return (
            <Spacing small>
                <Title>{experience.jobTitle} {experience.company && <> @ {company} </>}</Title>
                { experience.date && <Timespan timespan={experience.date} />}
                <Paragraph>{experience.jobDescription}</Paragraph>
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
