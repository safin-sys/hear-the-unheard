import { Container, Grid, Heading, Text } from "@chakra-ui/layout";
import Hero from "../../components/Hero";
import NewsCategories from "../../components/NewsCategories";
import Post from "../../components/Post";
import client from "../../helper/sanity";

export const getStaticProps = async () => {
    const news = await client.fetch("*[_type == 'blog']");
    const categories = await client.fetch("*[_type == 'blogCategories']");    
    return {
        props: {
            news,
            categories
        }
    };
};

export default function News({ news, categories }) {
    return (
        <>
            <Hero kids={<HeroText />} />
            <Container maxW="container.xl">
                <NewsCategories categories={categories} />
                <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap="1rem">
                    {news.map(post => (
                        categories.map(category => (
                            category._id === post.category._ref && (
                                <Post key={post._id} post={post} category={category.categoryName} />
                            )
                        ))
                    ))}
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