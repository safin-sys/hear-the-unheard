import { Heading, Text } from '@chakra-ui/layout'
import Hero from '../components/Hero'
import TeamGrid from '../components/TeamGrid'

export default function Team() {
    return (
        <>
            <Hero children={<HeroText />} />
            <TeamGrid />
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