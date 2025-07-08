import styled from '@emotion/styled'
import { SectionHeaderComponent } from '../../fragments/SectionHeader'
import { SpacingComponent } from '../../fragments/Spacing'
import type { Language } from '../../types'

const Lang = styled.dt`
    font-weight: 600;
`

const Level = styled.dd`
    color: #858585;
    padding: 0;
    margin: 0;
`

export const LanguagesComponent = ({ data }: { data: Language[]}) => {

    const renderLanguages = data.map(language => {
        return (
            <SpacingComponent key={language.name} small>
                <dl>
                    <Lang>{language.name}</Lang>
                    <Level>{language.value}</Level>
                </dl>
            </SpacingComponent>
        )
    })

    return (
        <SpacingComponent>
            <SectionHeaderComponent>Languages</SectionHeaderComponent>
            {renderLanguages}
        </SpacingComponent>
    )
}
