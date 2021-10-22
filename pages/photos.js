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
    console.log(images);
    return (
        <>
            <Hero kids={<HeroText />} />
            <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}>
                {images.map((info, i) => {
                    const imageProps = useNextSanityImage(client, info.image)
                    return <Image key={i} {...imageProps} alt={info.image_name} objectFit="cover" height="1800" />
                })}
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