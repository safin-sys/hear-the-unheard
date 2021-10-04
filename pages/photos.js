import { Image } from "@chakra-ui/image";
import { Grid, Heading, Text } from "@chakra-ui/layout";
import Hero from "../components/Hero";

export default function Photos() {
    return (
        <div>
            <Hero kids={<HeroText />} />
            <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}>
                <Image src="/images/grid/1.jpg" alt="1" objectFit="cover" h="100%" />
                <Image src="/images/grid/2.jpg" alt="2" objectFit="cover" h="100%" />
                <Image src="/images/grid/3.jpg" alt="3" objectFit="cover" h="100%" />
                <Image src="/images/grid/4.jpg" alt="4" objectFit="cover" h="100%" />
                <Image src="/images/grid/5.jpg" alt="5" objectFit="cover" h="100%" />
                <Image src="/images/grid/6.jpg" alt="6" objectFit="cover" h="100%" />
                <Image src="/images/grid/7.jpg" alt="7" objectFit="cover" h="100%" />
                <Image src="/images/grid/8.jpg" alt="8" objectFit="cover" h="100%" />
                <Image src="/images/grid/9.jpg" alt="9" objectFit="cover" h="100%" />
            </Grid>
        </div>
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            We are digital crafters from New York. <br />
            Our passion is <Heading as="p" display="inline">UI & UX</Heading> design & coding.
        </Text>
    )
}