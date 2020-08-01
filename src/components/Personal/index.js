import React from 'react'
import styled from 'styled-components'
import Spacing from '../../fragments/Spacing'

const Profile = styled.div`
    max-width: 400px;
    display: flex;
`

const Name = styled.h1`
    margin: 0;
    font-size: 1.5em;
`

const Jobtitle = styled.p`
    margin: 0;
`

const Location = styled.p`
    margin: 0;
`

const Picture = styled.div`
    width: 100px;
    height: 100px;
    margin-right: 50px;
`

const CircularPicture = styled.img`
    border-radius: 50px;
    width: 100%;
`

const Information = styled.div`
    flex: 70%;
`

const ContactDetails = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    & li {
        display: inline-block;
        line-height: 1.5;
        margin-right: 10px;
    }
`

export default ({ data }) => {
    const {
        firstName,
        lastName,
        currentSituation,
        location,
        picture,
        email,
        phoneNumber
    } = data

    const company = !currentSituation.company ? null
        : currentSituation.company.website ? <a target={'_blank'} href={currentSituation.company.website}>{currentSituation.company.name}</a>
            : currentSituation.company.name

    return (
        <Spacing>
            <Profile>
                <Picture>
                    <CircularPicture src={picture} />
                </Picture>
                <Information>
                    <Name>{`${firstName} ${lastName}`}</Name>
                    <Jobtitle>{currentSituation.title}{currentSituation.company && <> @ {company} </>}</Jobtitle>
                    <Location>{`${location.city}, ${location.country}`}</Location>
                    <ContactDetails>

                    <li><a href={`mailto:${email}`}>{email}</a></li>
                    <li><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></li>
                    </ContactDetails>

                </Information>
            </Profile>
        </Spacing>
    )
}
