import { Image } from "@chakra-ui/image";
import { Container, Flex, Text } from "@chakra-ui/layout";
import { AiOutlineTwitter, AiFillFacebook, AiFillYoutube, AiOutlineBehance } from "react-icons/ai"

export default function Footer() {
    console.log();
    return (
        <Container as="footer" centerContent>
            <Image src="/divider.png" alt="Divider" />
            <Flex my="4rem" flexDir="column">
                <Text>
                    © {new Date().getFullYear()}. Made by <a href="http://github.com/safin-sys" target="_blank" rel="noreferrer">Safin</a>.
                </Text>
                <Flex justifyContent="space-between" fontSize="1.2rem" mt="1rem">
                    <AiOutlineTwitter />
                    <AiFillFacebook />
                    <AiFillYoutube />
                    <AiOutlineBehance />
                </Flex>
            </Flex>
        </Container>
    )
}
