import { Image } from "@chakra-ui/image";
import { Box, Container, Flex } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link"

export default function Nav() {
    return (
        <Container maxW="90vw" mt="5%">
            <Flex as="nav" h="80px" justifyContent="space-between" alignItems="center">
                <Image h="60px" border="black 2px solid" borderRadius="30px" src="/logo.jpg" alt="Logo" />
                <Flex listStyleType="none" fontWeight="medium">
                    <NavLinks />
                </Flex>
            </Flex>
        </Container>
    )
}

const paths = ["Home", "Service", "About", "Team", "Blog", "Contact"]

const NavLinks = () => {
    const router = useRouter()
    return (
        <>
            {paths.map((path, i) => {
                const isActive = router.route === path || router.route === "/" && path === "Home"
                return (
                    <Box color={isActive ? "#939393" : "inherit"} key={i} mr="2.5rem">
                        <NextLink href={`/${path.toLowerCase()}`}>
                            {path}
                        </NextLink>
                    </Box>
                )
            })}
        </>
    )
}