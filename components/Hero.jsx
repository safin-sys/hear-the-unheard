import { Image } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";

export default function Hero({ children }) {
    return (
        <Container maxW="container.lg" centerContent mt="75px" mb="4rem">
            {children}
            <Image src="/divider.png" alt="Divider" />
        </Container>
    )
}
