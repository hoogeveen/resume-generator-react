import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../../fragments/SectionHeader'
import Spacing from '../../fragments/Spacing'
import Line from '../../fragments/Line'

export default ({ data }) => {

    const { bio } = data

    return (
        <Spacing>
            <SectionHeader>Profile</SectionHeader>
            <Line><div dangerouslySetInnerHTML={{ __html: bio }} /></Line>
        </Spacing>
    )
}
