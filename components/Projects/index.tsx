import React from 'react'
import styled from 'styled-components'
import Spacing from '../../fragments/Spacing'
import SectionHeader from '../../fragments/SectionHeader'
import { Project } from '../../types'

const Link = styled.a`
    display: block;
    color: #0366d6;
    font-weight: 600;
`

const Tagline = styled.p`
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    line-height: 1.5;
    font-size: 12px;
    color: #586069;
`

const Container = styled.div`
    border: 1px solid #e1e4e8;
    padding: 16px;
    border-radius: 6px;
`

const Tag = styled.div`
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    line-height: 1.5;
    font-size: 12px;
    color: #586069;
    &::before {
        content: "";
        display: inline-block;
        position: relative;
        margin-right: 5px;
        top: 1px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${({ theme, color }) => color};
    }
`


export default ({ data }: { data: Project[]}) => {

    const renderProjects = data.map(project => {

        const renderTags = project.tags.map(tag => {
            return (
                <Tag color={tag.color}>{tag.name}</Tag>
            )
        })

        return (
            <Spacing small>
                <Container>
                    <Link target={"_blank"} href={project.url}>{project.name}</Link>
                    <Tagline>{project.description}</Tagline>
                    {renderTags}
                </Container>
            </Spacing>
        )
    })

    return (
        <Spacing>
            <SectionHeader>Projects</SectionHeader>
            {renderProjects}
        </Spacing>
    )
}
