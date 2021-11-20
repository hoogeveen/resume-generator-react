import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../../fragments/SectionHeader'

const ContactDetails = styled.ul`
    list-style: none;
    padding: 0;
    line-height: 2;
`

const ContactLink = styled.a`
    text-decoration: none;'
`

export default ({ data }) => {
    const {
        phoneNumber,
        email,
        location
    } = data

    return (
        <>
            <SectionHeader>Details</SectionHeader>
            <ContactDetails>
                { location && <li>{ location.city }, {location.country}</li> }
                <li><a href={`mailto:${email}`}>{email}</a></li>
                <li><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></li>
            </ContactDetails>
        </>
    )
}
