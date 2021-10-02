import { Container, Grid, Heading, Text } from "@chakra-ui/layout";
import Hero from "../components/Hero";
import NewsCategories from "../components/NewsCategories";
import Post from "../components/Post";

export default function News() {
    return (
        <>
            <Hero kids={<HeroText />} />
            <Container maxW="container.xl">
                <NewsCategories />
                <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap="1rem">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Grid>
            </Container>
        </>
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            We are digital crafters from New York. <br />
            Our passion is <Heading as="p" display="inline">UI & UX</Heading> design & coding.
        </Text>
    )
}