import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import client from "../helper/sanity"

export const getStaticProps = async () => {
    const joinInfo = await client.fetch("*[_type == 'join'][0]")
    return {
        props: {
            joinInfo
        }
    }
}

export default function Join({ joinInfo }) {
    const { title, jobs } = joinInfo
    return (
        <>
            <Hero kids={<HeroText />} />
            <Container maxW={["95vw", "85vw"]}>
                <Heading>{title}</Heading>
                <Container maxW="container.lg">
                    <Flex mt="3rem" flexWrap="wrap" justifyContent={["center", "center", "space-between"]}>
                        {jobs && jobs[0] ? jobs.map((job, i) => {
                            return <JobCard key={i} job={job} />
                        }) : <NoJob />}
                    </Flex>
                </Container>
            </Container>
        </>
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

const NoJob = () => {
    return (
        <Container centerContent>
            <Text>No openings available at the moment.</Text>
        </Container>
    )
}