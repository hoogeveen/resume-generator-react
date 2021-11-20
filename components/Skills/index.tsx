import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../../fragments/SectionHeader'
import Spacing from '../../fragments/Spacing'
import { Tag } from '../../types'

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


export default ({ data }: { data: Tag[]}) => {

    const renderSkills = data.map(skill => {
        return (
            <Skill style={{ backgroundColor: skill.color }}>{skill.name}</Skill>
        )
    })

    return (
        <Spacing>
            <SectionHeader>Skills</SectionHeader>
            <Skills>{renderSkills}</Skills>
        </Spacing>
    )
}
