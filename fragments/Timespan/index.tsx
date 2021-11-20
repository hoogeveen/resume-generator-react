import React from 'react'
import styled from  'styled-components'
import { Timespan } from '../../types'

const ExperienceDate = styled.p`
    margin: 0;
    color: #329CB9
`

export default ({ timespan }: { timespan: Timespan }) => {
    return <ExperienceDate>{timespan.start.toDateString()} - {timespan.end.toDateString()}</ExperienceDate>
}
