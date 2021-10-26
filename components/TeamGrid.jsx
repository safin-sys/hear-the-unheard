import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image"
import SocialButtonsContainer from "react-social-media-buttons"
import client from "../helper/sanity";

export default function TeamGrid({ members }) {
    return (
        <div>
            <Box display="grid" gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gridAutoRows={["500px", "600px"]}>
                {members.map((member, i) => {
                    return <Img key={i} member={member} />
                })}
            </Box>
        </div>
    )
}

const Img = ({ member }) => {
    const { description, image, name, social } = member
    const imageProps = useNextSanityImage(client, image)
    const { blurDataURL, src } = imageProps
    return (
        <Box pos="relative" mb="200px">
            <Image src={src} placeholder="blur" blurDataURL={blurDataURL} alt={name} objectFit="cover" layout="fill" />
            <Box
                background="black"
                color="white"
                h="200px"
                pos="absolute"
                bottom="-200px"
                w="100%"
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