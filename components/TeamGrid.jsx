import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import SocialButtonsContainer from "react-social-media-buttons"
import { urlFor } from "../helper/sanity";

export default function TeamGrid({ members }) {
    return (
        <div>
            <Box display={["flex", "flex", "grid"]} gridTemplateColumns="repeat(3, 1fr)" flexDir="column">
                {members.map((member, i) => {
                    return <Img key={i} member={member} />
                })}
            </Box>
        </div>
    )
}

const Img = ({ member }) => {
    const { description, image, name, social } = member
    return (
        <Box>
            <Image w="100%" h="400px" objectFit="cover" src={urlFor(image)} alt={name} />
            <Box
                background="black"
                color="white"
                h="200px"
            >
                <Flex flexDir="column" textAlign="center" alignItems="center" justifyContent="center" h="100%">
                    <Heading fontSize="1.5rem" fontWeight="medium">{name}</Heading>
                    <Text maxW="40ch" mt=".5rem" mb="1rem" overflow="hidden" textOverflow="ellipsis" display="-webkit-box" style={{ WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{description}</Text>
                    {social && <SocialButtonsContainer
                        links={social}
                        buttonStyle={{ width: '32px', height: '32px', margin: '0px 0px', backgroundColor: '#000000' }}
                        iconStyle={{ color: '#ffffff' }}
                        openNewTab={true}
                    />}
                </Flex>
            </Box>
        </Box>
    )
}