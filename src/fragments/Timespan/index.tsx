import styled from '@emotion/styled'
import type { Timespan } from '../../types'

const ExperienceDate = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.primary};
`

export const TimespanComponent = ({ timespan }: { timespan: Timespan }) => {
    return <ExperienceDate>{timespan.start.toDateString()} - {timespan.end ? timespan.end.toDateString() : 'Present'}</ExperienceDate>
}
