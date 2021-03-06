import { Container, Flex, Text } from "@chakra-ui/layout";
import { AiOutlineTwitter, AiFillFacebook, AiFillYoutube, AiOutlineBehance } from "react-icons/ai"
import Ladder from "./Ladder";

export default function Footer() {
    return (
        <Container as="footer" centerContent mt="4rem">
            <Ladder />
            <Flex my="4rem" flexDir="column">
                <Text>
                    © {new Date().getFullYear()}. Made by <a href="http://github.com/safin-sys" target="_blank" rel="noreferrer">Safin</a>.
                </Text>
                <Flex justifyContent="space-between" fontSize="1.2rem" mt="1rem">
                    <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer">
                        <AiOutlineTwitter />
                    </a>
                    <a aria-label="Facebook" href="https://fb.me" target="_blank" rel="noreferrer">
                        <AiFillFacebook />
                    </a>
                    <a aria-label="Youtube" href="https://youtu.be" target="_blank" rel="noreferrer">
                        <AiFillYoutube />
                    </a>
                    <a aria-label="Behance" href="https://behance.net/" target="_blank" rel="noreferrer">
                        <AiOutlineBehance />
                    </a>
                </Flex>
            </Flex>
        </Container>
    )
}
