import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Grid,
    IconButton,
    Image,
    Link as ChakraLink,
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { SiFacebook, SiTwitter, SiYoutube } from "react-icons/si";

const Nav = () => {
    return (
        <Grid
            templateColumns="repeat(3, 1fr)"
            as="nav"
            h="4rem"
            alignItems="center"
            fontWeight="bold"
        >
            <Image h="4rem" w="4rem" src="/logo.jpg" alt="Logo" />
            <DesktopLinks />
            <MobileLinks />
        </Grid>
    );
};

export default Nav;

const DesktopLinks = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            <Flex
                gap="2rem"
                justifySelf="center"
                display={["none", "none", "flex"]}
            >
                <NextLink href="/" passHref>
                    <ChakraLink>Home</ChakraLink>
                </NextLink>
                <NextLink href="/about" passHref>
                    <ChakraLink>About</ChakraLink>
                </NextLink>
                <NextLink href="/news" passHref>
                    <ChakraLink>News</ChakraLink>
                </NextLink>
                <NextLink href="/team" passHref>
                    <ChakraLink>Team</ChakraLink>
                </NextLink>
                <NextLink href="/contact" passHref>
                    <ChakraLink>Contact</ChakraLink>
                </NextLink>
            </Flex>
            <Box justifySelf="end" display={["none", "none", "block"]}>
                <NextLink href="/join" passHref>
                    <ChakraLink
                        bgColor="blue.500"
                        p=".5rem 2rem"
                        rounded="base"
                        color={colorMode === "light" ? "white" : "gray.900"}
                    >
                        Join Us
                    </ChakraLink>
                </NextLink>
            </Box>
        </>
    );
};

const MobileLinks = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();
    return (
        <>
            <IconButton
                display={["flex", "flex", "none"]}
                gridColumn="3"
                justifySelf="end"
                onClick={onOpen}
            >
                <AiOutlineMenu />
            </IconButton>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton top="1rem" right="1.5rem" />
                    <DrawerBody>
                        <Flex
                            gap="2rem"
                            flexDir="column"
                            fontWeight="bold"
                            h="full"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <NextLink href="/" passHref>
                                <ChakraLink>Home</ChakraLink>
                            </NextLink>
                            <NextLink href="/about" passHref>
                                <ChakraLink>About</ChakraLink>
                            </NextLink>
                            <NextLink href="/news" passHref>
                                <ChakraLink>News</ChakraLink>
                            </NextLink>
                            <NextLink href="/team" passHref>
                                <ChakraLink>Team</ChakraLink>
                            </NextLink>
                            <NextLink href="/contact" passHref>
                                <ChakraLink>Contact</ChakraLink>
                            </NextLink>
                            <NextLink href="/join" passHref>
                                <ChakraLink
                                    bgColor="blue.500"
                                    p=".5rem 2rem"
                                    rounded="base"
                                    color={colorMode === "light" ? "white" : "gray.900"}
                                >
                                    Join Us
                                </ChakraLink>
                            </NextLink>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Flex gap="1rem" justifyContent="center" w="full">
                            <IconButton>
                                <SiFacebook />
                            </IconButton>
                            <IconButton>
                                <SiTwitter />
                            </IconButton>
                            <IconButton>
                                <SiYoutube />
                            </IconButton>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
