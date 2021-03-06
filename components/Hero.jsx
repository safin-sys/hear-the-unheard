import { Container } from "@chakra-ui/layout";
import Ladder from "./Ladder";

export default function Hero({ kids }) {
    return (
        <Container maxW="container.lg" centerContent mt="12rem" mb="4rem">
            {kids}
            <Ladder />
        </Container>
    )
}
