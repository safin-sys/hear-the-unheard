import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link"
import slug from "../helper/slug";
import { urlFor } from "../helper/sanity";

export default function ImageGrid({ images }) {
    return (
        <Box display={["flex", "flex", "grid"]} flexDir="column" gridAutoRows={["300px", "300px", "300px", "400px"]}>
            {images?.map((image, i) => {
                return <Img key={i} info={image} />
            })}
        </Box>
    )
}

const Img = ({ info }) => {
    const { category, image } = info

    const gc = category === "Campaigns" && "1/3" ||
        category === "Photos" && "2/4" ||
        category === "Videos" && "1/3"
    const gr = category === "Photos" && "2/4"
    return (
        <Box gridColumn={gc && gc} gridRow={gr && gr} pos="relative" cursor="pointer">
            <NextLink href={`/${slug(category)}`}>
                <a>
                    <Image w="100%" h="100%" objectFit="cover" src={urlFor(image)} alt={category} />

                    <Box
                        pos="absolute"
                        top="0"
                        bottom="0"
                        left="0"
                        right="0"
                        background="black"
                        color="white"
                        opacity="0"
                        transition="all .5s ease"
                        _hover={{ opacity: "1" }}
                    >
                        <Flex flexDir="column" textAlign="center" alignItems="center" justifyContent="center" h="100%">
                            <Heading fontSize="1.5rem" fontWeight="medium">{category}</Heading>
                        </Flex>
                    </Box>
                </a>
            </NextLink>
        </Box>
    )
}