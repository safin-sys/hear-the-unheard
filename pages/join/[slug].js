import { Badge, Box, Container, Flex, Heading, Text } from "@chakra-ui/layout"
import client from "../../helper/sanity"
import RichText from '@sanity/block-content-to-react'
import Hero from "../../components/Hero";

export const getStaticProps = async (context) => {
    const jobs = await client.fetch("*[_type == 'join'][0]['jobs']")
    const job = jobs.filter(job => job._key === context.params.slug)
    return {
        props: {
            job
        }
    }
}

export const getStaticPaths = async () => {
    const joinInfo = await client.fetch("*[_type == 'join'][0]['jobs']")
    const paths = joinInfo.map(join => ({
        params: {
            slug: join._key
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export default function JoinSlug({ job }) {
    const { position, description, location, type } = job[0]
    const capitalType = type.toUpperCase()
    const badgeColor = capitalType === "FULL TIME" && "purple" ||
        capitalType === "PART TIME" && "orange" ||
        capitalType === "REMOTE" && "red" ||
        capitalType === "VOULUNTEER" && "green"
    return (
        <Container maxW={["95vw", "85vw"]}>
            <Hero kids={<HeroText />} />
            <Container>
                <Box my="8">
                    <Heading>{position}</Heading>
                    <Flex alignItems="center" mt="2">
                        <Badge colorScheme={badgeColor} mr="2">{capitalType}</Badge>
                        <Heading as="h3" size="sm">{location}</Heading>
                    </Flex>
                </Box>
                <hr />
                <RichText className="block" blocks={description} />
            </Container>
        </Container>
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            Work with us <br />
            helping <Heading as="p" display="inline">people</Heading> in need
        </Text>
    )
}