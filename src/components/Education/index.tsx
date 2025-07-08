import { SpacingComponent } from '../../fragments/Spacing'
import { SectionHeaderComponent } from '../../fragments/SectionHeader'
import { LineComponent } from '../../fragments/Line'
import type { Education } from '../../types'
import { TimespanComponent } from '../../fragments/Timespan'
import { ParagraphComponent } from '../../fragments/Paragraph'
import { TitleComponent } from '../../fragments/Title'

export const EducationComponent = ({ data }: { data: Education[] }) => {

    const renderEducation = data.map(education => {

        return (
            <SpacingComponent key={education.name} small>
                <TitleComponent>{education.name}</TitleComponent>
                <TimespanComponent timespan={education.date} />
                <ParagraphComponent>{education.institution.name}</ParagraphComponent>
            </SpacingComponent>
        )
    })

    return (
        <SpacingComponent>
            <SectionHeaderComponent>Education</SectionHeaderComponent>
            <LineComponent>
                {renderEducation}
            </LineComponent>
        </SpacingComponent>
    )
}
