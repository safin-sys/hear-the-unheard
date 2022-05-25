import { Image } from "@chakra-ui/image";
import {
    Box,
    Container,
    Flex,
    Button,
    useDisclosure,
    Heading,
    IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
} from "@chakra-ui/react";
import { RiMenu3Fill, RiCloseCircleFill } from "react-icons/ri";
import { useCallback, useState, useEffect } from "react";

export default function Nav() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(prevScrollPos > currentScrollPos);

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <Container
            maxW="100%"
            px="5%"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            bgColor="rgba(255,255,255,0.8)"
            backdropFilter="blur(10px)"
            transform={visible ? "translateY(0)" : "translateY(-100%)"}
            transition="all 0.3s ease-in-out"
        >
            <Flex
                as="nav"
                h="80px"
                justifyContent="space-between"
                alignItems="center"
            >
                <NextLink href="/">
                    <a>
                        <Image h="70px" w="70px" src="/logo.jpg" alt="Logo" />
                    </a>
                </NextLink>
                <Flex listStyleType="none" fontWeight="medium">
                    <NavLinks />
                    <MobileDrawer />
                </Flex>
            </Flex>
        </Container>
    );
}

const paths = ["Home", "About", "News", "Team", "Join", "Contact"];

const NavLinks = () => {
    const router = useRouter();
    return (
        <>
            {paths.map((path, i) => {
                const isActive =
                    (router.route === "/" && path === "Home") ||
                    router.route === "/" + path.toLowerCase();
                const link =
                    path.toLowerCase() === "home"
                        ? "/"
                        : "/" + path.toLowerCase();
                return (
                    <Box
                        display={["none", "none", "block"]}
                        color={isActive ? "#555" : "inherit"}
                        key={i}
                        _hover={{ color: "#555" }}
                        mr="2.5rem"
                    >
                        <NextLink href={link}>{path}</NextLink>
                    </Box>
                );
            })}
        </>
    );
};

const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    router.events?.on("routeChangeComplete", () => {
        onClose();
    });
    return (
        <Box display={["block", "block", "none"]}>
            <IconButton
                aria-label="Menu Open"
                onClick={onOpen}
                bg="none"
                fontSize="32px"
                icon={<RiMenu3Fill />}
            />
            <Drawer onClose={onClose} isOpen={isOpen} size="full">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <Flex justifyContent="end" mt="2rem">
                            <IconButton
                                aria-label="Menu Close"
                                onClick={onClose}
                                icon={<RiCloseCircleFill />}
                                fontSize="32px"
                                bg="none"
                            />
                        </Flex>
                        <Container centerContent mt="3rem">
                            <Flex flexDir="column" justifyContent="center">
                                {paths.map((path, i) => {
                                    const isActive =
                                        (router.route === "/" &&
                                            path === "Home") ||
                                        router.route ===
                                            "/" + path.toLowerCase();
                                    const link =
                                        path.toLowerCase() === "home"
                                            ? "/"
                                            : path.toLowerCase();
                                    return (
                                        <Box
                                            color={
                                                isActive ? "#555" : "inherit"
                                            }
                                            key={i}
                                            _hover={{ color: "#555" }}
                                        >
                                            <Heading
                                                fontWeight="medium"
                                                textAlign="center"
                                                fontSize="1.5rem"
                                                my=".5rem"
                                            >
                                                <NextLink href={link}>
                                                    {path}
                                                </NextLink>
                                            </Heading>
                                        </Box>
                                    );
                                })}
                            </Flex>
                        </Container>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
