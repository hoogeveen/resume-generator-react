import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../../fragments/SectionHeader'
import Spacing from '../../fragments/Spacing'
import { Language } from '../../types'

const Lang = styled.dt`
    font-weight: 600;
`

const Level = styled.dd`
    color: #858585;
    padding: 0;
    margin: 0;
`


export default ({ data }: { data: Language[]}) => {

    const renderLanguages = data.map(language => {
        return (
            <Spacing small>
                <dl>
                    <Lang>{language.name}</Lang>
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
