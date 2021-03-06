import { Box, Flex, Heading } from "@chakra-ui/layout";
import NextLink from "next/link";
import slug from "../helper/slug";
import client from "../helper/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export default function ImageGrid({ images }) {
    return (
        <Box
            display="grid"
            gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}
            gridAutoRows={["300px", "300px", "300px", "400px"]}
            overflow="hidden"
        >
            {images?.map((image, i) => {
                return <Img key={i} info={image} />;
            })}
        </Box>
    );
}

const Img = ({ info }) => {
    const { category, image } = info;
    const imageProps = useNextSanityImage(client, image);

    const gc =
        (category === "Campaigns" && "1/3") ||
        (category === "Photos" && "2/4") ||
        (category === "Videos" && "1/3");
    const gr = category === "Photos" && "2/4";
    const { blurDataURL, src } = imageProps;
    const handleNextLink = () => {
        const blogCategories = ["Success Story", "Blog", "Research"];
        if (blogCategories.includes(category)) {
            return `/news?id=${category}`;
        } else {
            return `/${slug(category)}`;
        }
    };
    return (
        <Box
            gridColumn={["inherit", gc && gc]}
            gridRow={["inherit", gr && gr]}
            pos="relative"
            cursor="pointer"
        >
            <Image
                src={src}
                placeholder="blur"
                blurDataURL={blurDataURL}
                alt={category}
                objectFit="cover"
                layout="fill"
            />
            <NextLink href={handleNextLink()}>
                <a>
                    <Box
                        pos="absolute"
                        top="0"
                        bottom="0"
                        left="0"
                        right="0"
                        background="rgba(0,0,0,0.5)"
                        color="white"
                        opacity="0"
                        transition="all .5s ease"
                        _hover={{ backdropFilter: "blur(20px)", opacity: "1" }}
                    >
                        <Flex
                            flexDir="column"
                            textAlign="center"
                            alignItems="center"
                            justifyContent="center"
                            h="100%"
                        >
                            <Heading fontSize="1.5rem" fontWeight="medium">
                                {category}
                            </Heading>
                        </Flex>
                    </Box>
                </a>
            </NextLink>
        </Box>
    );
};
