import { SpacingComponent } from '../../fragments/Spacing'
import { SectionHeaderComponent } from '../../fragments/SectionHeader'
import { LineComponent } from '../../fragments/Line'
import type { workExperience } from '../../types'
import { TimespanComponent } from '../../fragments/Timespan'
import { ParagraphComponent } from '../../fragments/Paragraph'
import { TitleComponent } from '../../fragments/Title'

export const ExperienceComponent = ({ data }: { data: workExperience[] }) => {

    const renderExperience = data.map(experience => {

        const company = !experience.company ? null
            : experience.company.website ? <a target={'_blank'} href={experience.company.website}>{experience.company.name}</a>
            : experience.company.name

        return (
            <SpacingComponent key={`${experience.jobTitle}-${experience.company?.name}`} small>
                <TitleComponent>{experience.jobTitle} {experience.company && <> @ {company} </>}</TitleComponent>
                { experience.date && <TimespanComponent timespan={experience.date} />}
                <ParagraphComponent>{experience.jobDescription}</ParagraphComponent>
            </SpacingComponent>
        )
    })

    return (
        <SpacingComponent>
            <SectionHeaderComponent>Experience</SectionHeaderComponent>
            <LineComponent>
                {renderExperience}
            </LineComponent>
        </SpacingComponent>
    )
}
