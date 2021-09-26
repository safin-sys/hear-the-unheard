import { Image } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";
import Ladder from "./Ladder";

export default function Hero({ kids }) {
    return (
        <Container maxW="container.lg" centerContent mt="75px" mb="4rem">
            {kids}
            <Ladder />
            {/* <Image src="/divider.png" alt="Divider" /> */}
        </Container>
    )
}
