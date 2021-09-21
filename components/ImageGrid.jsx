import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link"

const gridList = ["Campaings", "News", "Success Story", "Photo Gallery", "Impacts", "Documentaries", "Research", "Join", "Team", "About"]

export default function ImageGrid() {
    return (
        <Box display={["flex", "flex", "grid"]} flexDir="column" gridAutoRows={["300px", "300px", "300px", "400px"]}>
            {gridList.map((title, i) => {
                return <Img key={i} src={`/images/grid/${i+1}.jpg`} alt={i+1} title={title} />
            })}
        </Box>
    )
}

const Img = ({ src, alt, title }) => {
    const gc =  title === "Campaings" && "1/3" ||
                title === "Photo Gallery" && "2/4" ||
                title === "Documentaries" && "1/3"

    const gr = title === "Photo Gallery" && "2/4"
    return (
        <Box gridColumn={gc && gc} gridRow={gr && gr} pos="relative" cursor="pointer">
            <NextLink href={`/${alt}`}>
                <a>
                    <Image w="100%" h="100%" objectFit="cover" src={src} alt={alt} />
                </a>
            </NextLink>
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
                    <Heading fontSize="1.5rem" fontWeight="medium">{title}</Heading>
                </Flex>
            </Box>
        </Box>
    )
}