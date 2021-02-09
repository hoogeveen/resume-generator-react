import React from 'react'
import Spacing from '../../fragments/Spacing'
import SectionHeader from '../../fragments/SectionHeader'
import Line from '../../fragments/Line'
import { Education } from '../../types'
import Timespan from '../../fragments/Timespan'
import Paragraph from '../../fragments/Paragraph'
import Title from '../../fragments/Title'

export default ({ data }: { data: Education[] }) => {

    const renderEducation = data.map(education => {

        return (
            <Spacing small>
                <Title>{education.name}</Title>
                <Timespan timespan={education.date} />
                <Paragraph>{education.institution.name}</Paragraph>
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
