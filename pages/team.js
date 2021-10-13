import { Heading, Text } from '@chakra-ui/layout'
import Hero from '../components/Hero'
import TeamGrid from '../components/TeamGrid'
import client from '../helper/sanity'

export const getStaticProps = async () => {
    const members = await client.fetch("*[_type == 'team'][0]['team_members']")
    return {
        props: {
            members
        }
    }
}

export default function Team({ members }) {
    return (
        <>
            <Hero kids={<HeroText />} />
            <TeamGrid members={members} />
        </>
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            Meet our<br />
            super <Heading as="p" display="inline">creative</Heading> team
        </Text>
    )
}