import { Container, Grid, Heading, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
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
    const router = useRouter();
    const { id } = router.query;
    const post = news.filter(post => post.category._ref === id);
    console.log(post);
    return (
        <>
            <Hero kids={<HeroText />} />
            <Container maxW="container.xl">
                <NewsCategories categories={categories} />
                <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap="1rem">
                    {/* This is the worst code I have ever written, So shit even Github went offline cause it doesn't want to host my code. 3:13am 28-Nov-2021 */}
                    {!id | id == "024f61f3-a072-4cbf-ac19-50c6a4ac83e1" ? news.map(post => (
                        categories.map(category => (
                            category._id === post.category._ref && !id ? (
                                <Post key={post._id} post={post} category={category.categoryName} />
                            ) : category._id === id && (
                                <Post key={post._id} post={post} category={category.categoryName} />
                            )
                        ))
                    )) : post.map(post => (
                        categories.map(category => (
                            category._id === post.category._ref && !id ? (
                                <Post key={post._id} post={post} category={category.categoryName} />
                            ) : category._id === id && (
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