import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading } from "@chakra-ui/layout";

const list = [
    {
        title: "News",
        src: "https://www.unicef.org/bangladesh/sites/unicef.org.bangladesh/files/styles/hero_mobile/public/2018-09/021%20Unicef-ICC-Mithila-March2017_0.jpg?itok=sWUYIe9u"
    },
    {
        title: "Impact",
        src: "https://www.unicefusa.org/sites/default/files/styles/standard_layout_banner/public/field-images/story-banner/2018/Banner%20Photo_0.jpg?itok=MGTL0fQm"
    },
    {
        title: "Success Story",
        src: "https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UNI329351_0.jpg?itok=DNWoo-St"
    },
    {
        title: "Research",
        src: "https://www.unicef.org/evaluation/sites/unicef.org.evaluation/files/styles/hero_desktop/public/UNI229978.jpg?itok=YLvi6JgV"
    },
    {
        title: "Annual Report",
        src: "https://image.isu.pub/150804133431-cc7a59a9bae6a76811a398bebe4c07f4/jpg/page_1.jpg"
    }
]

export default function NewsCategories() {
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
            {list.map((info, i) => {
                return <Category info={info} key={i} />
            })}
        </Flex>
    )
}

const Category = ({ info }) => {
    return (
        <Box overflow="hidden" mr="1.5rem" minW="300px" pos="relative" _last={{marginRight: '0'}} mb=".5rem">
            <Heading pos="absolute" color="white" p="1rem" fontSize="1.5rem" zIndex="1">{info.title}</Heading>
            <Image src={info.src} alt={info.title} objectFit="cover" w="300px" h="150px" _hover={{ transform: "scale3d(1, 1, 1)" }} transform="scale3d(1.05, 1.05, 1)" transition="transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s" />
        </Box>
    )
}