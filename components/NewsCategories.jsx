import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import { urlFor } from "../helper/sanity";

export default function NewsCategories({ categories }) {
    return (
        <Flex mb="2rem" overflowX="scroll" css={{
            // Chrome
            '&::-webkit-scrollbar': {
                height: '6px',
            },
            '&::-webkit-scrollbar-track': {
                height: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: "#39b5a4",
            },
            // Firefox
            'scrollbar-color': "#39b5a4",
        }}>
            {categories.map(cat => {
                return <Category cat={cat} key={cat._id} />
            })}
        </Flex>
    )
}

const Category = ({ cat }) => {
    const router = useRouter();
    const handleRoute = () => {
        if (cat._id == "024f61f3-a072-4cbf-ac19-50c6a4ac83e1") {
            router.replace('/news', undefined, { shallow: true });
        } else {
            router.push({
                pathname: "/news",
                query: { id: cat.categoryName }
            }, undefined, { shallow: true });
        }
    }
    return (
        <Box overflow="hidden" mr="1.5rem" minW="300px" pos="relative" _last={{ marginRight: '0' }} mb=".5rem" onClick={handleRoute}>
            <Heading pos="absolute" color="white" p="1rem" fontSize="1.5rem" zIndex="1">{cat.categoryName}</Heading>
            <Image src={urlFor(cat.categoryImage)} alt={cat.categoryName} objectFit="cover" w="300px" h="150px" _hover={{ transform: "scale3d(1, 1, 1)" }} transform="scale3d(1.05, 1.05, 1)" transition="transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s" />
        </Box>
    )
}