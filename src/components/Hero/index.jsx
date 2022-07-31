import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Grid
            templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
            h={["auto", "auto", "auto", "calc(100vh - 4rem)"]}
            placeContent="center"
            px={["0", "0", "0", "2rem"]}
            py="2rem"
            justifyItems="center"
        >
            <Flex
                flexDir="column"
                alignItems="baseline"
                justifyContent="center"
            >
                <Text fontSize="1.5rem">Always donate for the children</Text>
                <Heading fontSize={["2rem", "2rem", "2rem", "4rem"]}>
                    Lend a Helping Hand to Those in Need
                </Heading>
                <Button
                    colorScheme="blue"
                    mt={["1rem", "1rem", "1rem", "2rem"]}
                >
                    Join Us
                </Button>
            </Flex>
            <Image
                display={["none", "none", "none", "block"]}
                justifySelf="flex-end"
                src="/hero.jpeg"
                alt=""
                borderRadius="70% 30% 30% 70% / 60% 40% 60% 40%"
                w="500px"
                h="500px"
                objectFit="cover"
            />
        </Grid>
    );
};

export default Hero;
