import Image from "next/image";
import { Grid, Heading, Text } from "@chakra-ui/layout";
import { useNextSanityImage } from "next-sanity-image";
import Hero from "../components/Hero";
import client from "../helper/sanity";

export const getStaticProps = async () => {
    const images = await client.fetch("*[_type == 'photos'][0]['images']")
    return {
        props: {
            images
        }
    }
}

export default function Photos({ images }) {
    return (
        <>
            <Hero kids={<HeroText />} />
            <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}>
                {images.map((info, i) => {
                    return <Img key={i} info={info} />
                })}
            </Grid>
        </>
    )
}

const Img = ({ info }) => {
    const imageProps = useNextSanityImage(client, info.image)
    return (
        <Image {...imageProps} alt={info.image_name} objectFit="cover" height="1800" />
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            We talk about those who<Heading as="p" display="inline">can't.</Heading>
        </Text>
    )
}