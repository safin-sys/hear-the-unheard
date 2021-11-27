import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { urlFor } from "../helper/sanity";

export default function NewsCategories({ categories }) {
    return (
        <Flex mb="2rem" overflowX="scroll" css={{
            '&::-webkit-scrollbar': {
                height: '6px',
            },
            '&::-webkit-scrollbar-track': {
                height: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: "#39b5a4",
            },
        }}>
            {categories.map(cat => {
                return <Category cat={cat} key={cat._id} />
            })}
        </Flex>
    )
}

const Category = ({ cat }) => {
    return (
        <Box overflow="hidden" mr="1.5rem" minW="300px" pos="relative" _last={{marginRight: '0'}} mb=".5rem">
            <Heading pos="absolute" color="white" p="1rem" fontSize="1.5rem" zIndex="1">{cat.categoryName}</Heading>
            <Image src={urlFor(cat.categoryImage)} alt={cat.categoryName} objectFit="cover" w="300px" h="150px" _hover={{ transform: "scale3d(1, 1, 1)" }} transform="scale3d(1.05, 1.05, 1)" transition="transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s" />
        </Box>
    )
}