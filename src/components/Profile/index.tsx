import { SectionHeaderComponent } from '../../fragments/SectionHeader'
import { SpacingComponent } from '../../fragments/Spacing'
import { LineComponent } from '../../fragments/Line'
import type { Profile } from '../../types'

export const ProfileComponent = ({ data }: { data: Profile }) => {

    const { bio } = data

    return (
        <SpacingComponent>
            <SectionHeaderComponent>Profile</SectionHeaderComponent>
            <LineComponent><div dangerouslySetInnerHTML={{ __html: bio }} /></LineComponent>
        </SpacingComponent>
    )
}
