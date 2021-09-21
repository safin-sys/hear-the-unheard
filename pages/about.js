import { Image } from "@chakra-ui/image";
import { Container, Heading, Text } from "@chakra-ui/layout";
import Hero from "../components/Hero";

export default function About() {
    return (
        <>
            <Hero kids={<HeroText />} />
            <Image objectFit="cover" h={["200px", "500px"]} w="100%" objectPosition="0 50%" src="images/grid/7.jpg" alt="Frog" />
            <Container mt={["2rem", "4rem"]}>
                <Heading>About Toads</Heading>
                <Text mt="2rem">
                    Toad is a common name for certain frogs, especially of the family Bufonidae, that are characterized by dry, leathery skin, short legs, and large bumps covering the parotoid glands.
                    <br /><br />
                    A distinction between frogs and toads is not made in scientific taxonomy, but is common in popular culture (folk taxonomy), in which toads are associated with drier, rougher skin and more terrestrial habitats.
                    <br /><br />
                    In scientific taxonomy, toads include the true toad and various false toads including Ansonia malayana and Telmatobufo.
                    <br /><br />
                    In scientific taxonomy, toads are found in the families Bufonidae, Bombinatoridae, Calyptocephalellidae, Discoglossidae, Myobatrachidae, Pelobatidae, Rhinophrynidae, Scaphiopodidae, and Microhylidae.
                    <br /><br />
                    Usually the largest of the bumps on the skin of a toad are those that cover the parotoid glands. The bumps are commonly called warts, but they have nothing to do with pathologic warts, being fixed in size, present on healthy specimens, and not caused by infection. It{"'"}s a myth that handling toads causes warts.
                </Text>
            </Container>
        </>
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            This is a true story <br />
            about our <Heading as="p" display="inline">creative</Heading> agency
        </Text>
    )
}