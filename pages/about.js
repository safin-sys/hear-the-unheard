import { Image } from "@chakra-ui/image";
import { Container, Heading, Text } from "@chakra-ui/layout";
import Hero from "../components/Hero";
import client, { urlFor } from "../helper/sanity";
import RichText from '@sanity/block-content-to-react'

export const getStaticProps = async () => {
    const about = await client.fetch("*[_type == 'about'][0]")
    return {
        props: {
            about
        }
    }
}

export default function About({ about }) {
    const { main_image, title, description } = about
    console.log(main_image, title, description);
    return (
        <>
            <Hero kids={<HeroText />} />
            <Image objectFit="cover" h={["200px", "500px"]} w="100%" objectPosition="0 50%" src={urlFor(main_image)} alt={title} />
            <Container mt={["2rem", "4rem"]}>
                <Heading mb="2rem">{title}</Heading>
                <RichText blocks={description} />
            </Container>
        </>
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            This is a true story <br />
            about our <Heading as="p" display="inline">creative</Heading> agency
        </Text>
    )
}