import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Text,
    Link as ChakraLink,
    IconButton,
    Grid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SiFacebook, SiTwitter, SiYoutube } from "react-icons/si";

const Footer = () => {
    return (
        <Box bgColor="chakra-body-text" color="white" py="2rem">
            <Container maxW="container.xl">
                <Grid
                    gap="2rem"
                    templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
                >
                    <Branding />
                    <Links />
                    <Contact />
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;

const Branding = () => {
    return (
        <Flex flexDir="column" maxW="300px" alignItems="baseline" gap="1rem">
            <Image src="/logo.jpg" alt="Logo" w="4rem" />
            <Text>
                Nulla ultricies justo sit amet ante efficitur, eget pharetra
                augue efficitur. Vestibulum viverra, dolor sit amet ultricies.
            </Text>
            <Button colorScheme="blue">Join Us Now!</Button>
        </Flex>
    );
};

const Links = () => {
    return (
        <Flex flexDir="column">
            <Heading fontSize="1.25rem" mb=".5rem">
                Links
            </Heading>
            <NextLink href="#" passHref>
                <ChakraLink>About us</ChakraLink>
            </NextLink>
            <NextLink href="#" passHref>
                <ChakraLink>Contact</ChakraLink>
            </NextLink>
            <NextLink href="#" passHref>
                <ChakraLink>Latest News</ChakraLink>
            </NextLink>
            <NextLink href="#" passHref>
                <ChakraLink>Recent Events</ChakraLink>
            </NextLink>
            <NextLink href="#" passHref>
                <ChakraLink>Donations</ChakraLink>
            </NextLink>
        </Flex>
    );
};

const Contact = () => {
    return (
        <Flex flexDir="column" gap=".5rem">
            <Heading fontSize="1.25rem">Contact</Heading>
            <Text>
                380 Street Kilda Broklyn Road <br /> Melbourne Australia
            </Text>
            <NextLink href="#" passHref>
                <ChakraLink>contact@htu.org</ChakraLink>
            </NextLink>
            <NextLink href="#" passHref>
                <ChakraLink>+880 1971 070315</ChakraLink>
            </NextLink>
            <Flex gap="1rem">
                <IconButton colorScheme="facebook">
                    <SiFacebook />
                </IconButton>
                <IconButton colorScheme="twitter">
                    <SiTwitter />
                </IconButton>
                <IconButton colorScheme="red">
                    <SiYoutube />
                </IconButton>
            </Flex>
        </Flex>
    );
};
