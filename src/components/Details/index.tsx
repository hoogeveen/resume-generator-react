import styled from '@emotion/styled'
import { SectionHeaderComponent } from '../../fragments/SectionHeader'

const ContactDetails = styled.ul`
    list-style: none;
    padding: 0;
    line-height: 2;
`

export const DetailsComponent = ({ data }: { data: { phoneNumber: string; email: string; location?: { city: string; country: string } } }) => {
    const {
        phoneNumber,
        email,
        location
    } = data

    return (
        <>
            <SectionHeaderComponent>Details</SectionHeaderComponent>
            <ContactDetails>
                { location && <li>{ location.city }, {location.country}</li> }
                <li><a href={`mailto:${email}`}>{email}</a></li>
                <li><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></li>
            </ContactDetails>
        </>
    )
}
