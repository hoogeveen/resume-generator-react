import styled from '@emotion/styled'
import { SectionHeaderComponent } from '../../fragments/SectionHeader'
import { SpacingComponent } from '../../fragments/Spacing'
import type { Tag } from '../../types'

const Skills = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const Skill = styled.li`
    padding: 6px 6px;
    display: inline-block;
    line-height: initial;
    margin: 0 7px 7px 0;
    border-radius: 5px;
    color: #ffffff;
`

export const SkillsComponent = ({ data }: { data: Tag[]}) => {

    const renderSkills = data.map(skill => {
        return (
            <Skill key={skill.name} style={{ backgroundColor: skill.color }}>{skill.name}</Skill>
        )
    })

    return (
        <SpacingComponent>
            <SectionHeaderComponent>Skills</SectionHeaderComponent>
            <Skills>{renderSkills}</Skills>
        </SpacingComponent>
    )
}
