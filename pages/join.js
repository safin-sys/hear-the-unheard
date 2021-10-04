import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";

const jobs = [
    {
        title: "Front-end Developer",
        place: "Lal Bagh, Dhaka",
        type: "full time"
    },
    {
        title: "Back-end Developer",
        place: "Dhanmondi, Dhaka",
        type: "part time"
    },
    {
        title: "Manager",
        place: "Pantopath, Dhaka",
        type: "full time"
    },
    {
        title: "Lead Designer",
        place: "Gulshan, Dhaka",
        type: "remote"
    },
    {
        title: "Hotline Operator",
        place: "Pantopath, Dhaka",
        type: "volunteer"
    },
    {
        title: "Research Intern",
        place: "Pantopath, Dhaka",
        type: "volunteer"
    },
]

export default function Join() {
    return (
        <>
            <Hero kids={<HeroText />} />
            <Container maxW={["95vw", "85vw"]}>
                <Heading>Openings</Heading>
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