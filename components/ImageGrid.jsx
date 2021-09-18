import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link"

export default function ImageGrid() {
    return (
        <Box display={["flex", "flex", "grid"]} flexDir="column" my="4rem" gridAutoRows={["300px", "300px", "300px", "400px"]}>
            <Img src={`/images/1.jpg`} alt="1" gc="1/3" />
            <Img src={`/images/2.jpg`} alt="2" />
            <Img src={`/images/3.jpg`} alt="3" />
            <Img src={`/images/4.jpg`} alt="4" />
            <Img src={`/images/5.jpg`} alt="5" />
            <Img src={`/images/6.jpg`} alt="6" />
            <Img src={`/images/7.jpg`} alt="7" gc="2/4" />
            <Img src={`/images/8.jpg`} alt="8" gc="1/3" gr="4/6" />
            <Img src={`/images/9.jpg`} alt="9" />
            <Img src={`/images/10.jpg`} alt="10" />
        </Box>
    )
}

const Img = ({ src, alt, gc, gr }) => {
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
                    <Heading fontSize="1.5rem" fontWeight="medium">Animals</Heading>
                    <Text maxW="30ch">Animals are cool.</Text>
                </Flex>
            </Box>
        </Box>
    )
}