import client, { urlFor } from "../../helper/sanity";
import { Image } from "@chakra-ui/react"
import { Container, Heading, Text } from "@chakra-ui/layout";
import RichText from '@sanity/block-content-to-react'
import dayjs from "dayjs";

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const post = await client.fetch(`*[_type == 'blog' && _id == '${slug}'][0]`);
    return {
        props: {
            post
        },
    };
};

export const getStaticPaths = async () => {
    const news = await client.fetch("*[_type == 'blog']");
    const paths = news.map((news) => ({
        params: {
            slug: news._id
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export default function BlogPost({ post }) {
    console.log(post);
    const { title, body, mainImage, _createdAt } = post;
    return (
        <div>
            <Container mt="8">
            <Image src={urlFor(mainImage)} alt={title} w="100vw" h={["300px","500px", "600px"]} objectFit="cover" />
                <Heading>{title}</Heading>
                <Text my="4" color="#009444">{dayjs(_createdAt).format('DD-MMM-YYYY')}</Text>
                <RichText className="block" blocks={body} />
            </Container>
        </div>
    )
}
