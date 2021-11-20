import React from 'react'
import styled from 'styled-components'
import Spacing from '../../fragments/Spacing'
import { device } from '../../styles'
import { Personal } from '../../types'

const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media ${device.tablet} {
        flex-direction: row;
        text-align: left;
    }
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
    margin-bottom: 30px;
    @media ${device.tablet} {
        margin-bottom: initial;
        margin-right: 50px;
    }
`

const CircularPicture = styled.img`
    border-radius: 50px;
    width: 100%;
`

const Information = styled.div`
    @media ${device.tablet} {
        flex: 70%;
    }
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

export default ({ data }: { data: Personal }) => {
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
                    <Jobtitle>{currentSituation.jobTitle}{currentSituation.company && <> @ {company} </>}</Jobtitle>
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
