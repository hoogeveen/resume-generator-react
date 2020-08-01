import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../../fragments/SectionHeader'
import Spacing from '../../fragments/Spacing'

const Language = styled.dt`
    font-weight: 600;
`

const Level = styled.dd`
    color: #858585;
    padding: 0;
    margin: 0;
`


export default ({ data }) => {

    const renderLanguages = data.map(language => {
        return (
            <Spacing small>
                <dl>
                    <Language>{language.name}</Language>
                    <Level>{language.value}</Level>
                </dl>
            </Spacing>
        )
    })

    return (
        <Spacing>
            <SectionHeader>Languages</SectionHeader>
            {renderLanguages}
        </Spacing>
    )
}
