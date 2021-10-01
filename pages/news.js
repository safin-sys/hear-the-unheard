import { Grid, Heading, Text } from "@chakra-ui/layout";
import Hero from "../components/Hero";
import NewsCategories from "../components/NewsCategories";
import Post from "../components/Post";

export default function News() {
    return (
        <>
            <Hero kids={<HeroText />} />
            {/* <NewsCategories /> */}
            <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </Grid>
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