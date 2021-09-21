import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { AiFillDribbbleSquare, AiFillGooglePlusSquare, AiOutlineInstagram } from "react-icons/ai"

const teammates = ["Annie", "Bob", "Chris", "Christina", "Leonard", "Steve"]

export default function TeamGrid() {
    return (
        <div>
            <Box display={["flex", "flex", "grid"]} gridTemplateColumns="repeat(3, 1fr)" flexDir="column">
                {teammates.map((name, i) => {
                    return <Img key={i} src={`/images/team/${name.toLowerCase()}.webp`} alt={name} name={name} />
                })}
            </Box>
        </div>
    )
}

const Img = ({ src, alt, name }) => {
    return (
        <Box>
            <Image w="100%" h="400px" objectFit="cover" src={src} alt={alt} />
            <Box
                background="black"
                color="white"
                h="200px"
            >
                <Flex flexDir="column" textAlign="center" alignItems="center" justifyContent="center" h="100%">
                    <Heading fontSize="1.5rem" fontWeight="medium">{name}</Heading>
                    <Text maxW="40ch" my=".5rem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex qui est omnis odit, eveniet consectetur.</Text>
                    <Flex mt="1rem" justifyContent="space-between" w="100px" fontSize="1.5rem" borderRadius="50%">
                        <AiFillGooglePlusSquare />
                        <AiFillDribbbleSquare />
                        <AiOutlineInstagram />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}