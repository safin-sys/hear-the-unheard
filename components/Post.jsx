import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import dayjs from "dayjs";
import NextLink from "next/link"
import { urlFor } from "../helper/sanity";

dayjs.extend(require("dayjs/plugin/relativeTime"));

export default function Post({ post, category }) {
    return (
        <Flex flexDir="column" mb="1rem" mx="auto">
            <NextLink href={`/news/${post._id}`}>
                <a>
                    <Box overflow="hidden">
                        <Image src={urlFor(post.mainImage)} alt={post.title} _hover={{ transform: "scale3d(1, 1, 1)" }} transform="scale3d(1.05, 1.05, 1)" transition="transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s" objectFit="cover" h={["200px", "240px"]} w="425px" />
                    </Box>
                    <Box mt=".5rem" mx=".5rem">
                        <Text fontSize=".625rem" fontWeight="semibold" color="#009444">{category.toUpperCase()}</Text>
                        <Heading fontSize="1.25rem">{post.title}</Heading>
                        <Text fontSize="12px" mt=".5rem">{dayjs(post._createdAt).fromNow()}</Text>
                    </Box>
                </a>
            </NextLink>
        </Flex>
    )
}
