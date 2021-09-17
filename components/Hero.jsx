import { Image } from "@chakra-ui/image";
import { Container, Heading, Text } from "@chakra-ui/layout";

export default function Hero() {
    return (
        <Container maxW="container.lg" centerContent mt="75px">
            <Text fontSize="2rem" textAlign="center" mb="80px">
                We are digital crafters from New York. <br />
                Our passion is <Heading display="inline">UI & UX</Heading> design & coding.
            </Text>
            <Image src="/divider.png" alt="Section Divider" />
        </Container>
    )
}
