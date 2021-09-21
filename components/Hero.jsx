import { Image } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";

export default function Hero({ kids }) {
    return (
        <Container maxW="container.lg" centerContent mt="75px" mb="4rem">
            {kids}
            <Image src="/divider.png" alt="Divider" />
        </Container>
    )
}
