import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../../fragments/SectionHeader'
import Spacing from '../../fragments/Spacing'

const Skill = styled.div`
    padding: 6px 6px;
    display: inline-block;
    margin: 0 7px 7px 0;
    border-radius: 5px;

    color: #ffffff;
`


export default ({ data }) => {

    const renderSkills = data.map(skill => {
        return (
            <Skill style={{ backgroundColor: skill.color }}>{skill.name}</Skill>
        )
    })

    return (
        <Spacing>
            <SectionHeader>Skills</SectionHeader>
            {renderSkills}
        </Spacing>
    )
}
