import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import NextLink from "next/link"

export default function Post() {
    return (
        <Flex flexDir="column" mb="1rem" mx="auto">
            <NextLink href="/news/tft">
                <a>
                    <Box overflow="hidden">
                        <Image src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt390dee3a4f75b749/6143dcd2bd88320e12788b45/9202021_TFTReckoningChampionshipEventPrimer_ArticleLIVE_01_title.jpg" alt="tft" _hover={{ transform: "scale3d(1, 1, 1)" }} transform="scale3d(1.05, 1.05, 1)" transition="transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s" objectFit="cover" />
                    </Box>
                    <Box mt=".5rem" mx=".5rem">
                        <Text fontSize=".625rem" fontWeight="semibold" color="#009444">ESPORTS</Text>
                        <Heading fontSize="1.25rem">TEAMFIGHT TACTICS: RECKONING CHAMPIONSHIP PRIMER</Heading>
                        <Text fontSize="12px" mt=".5rem">2 weeks ago</Text>
                    </Box>
                </a>
            </NextLink>
        </Flex>
    )
}
