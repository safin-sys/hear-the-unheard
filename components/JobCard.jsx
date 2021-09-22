import { Badge, Box, Grid, Heading, Text } from "@chakra-ui/layout";
import NextLink from "next/link"

export default function JobCard({ job }) {
    const { title, place, type } = job
    const badgeColor =  type === "full time" && "purple" ||
                        type === "part time" && "orange" ||
                        type === "remote" && "red" ||
                        type === "volunteer" && "green"
    return (
        <NextLink href={title}>
            <a>
                <Grid mx="auto" my="1rem" templateColumns="1fr .1fr" w="310px" p="1rem" shadow="md" bgColor="#00001">
                    <Box>
                        <Heading fontSize="1.25rem">{title}</Heading>
                        <Text>{place}</Text>
                        <NextLink href={title}>
                            <a>
                                <Text color="green.500" fontWeight="medium" mt="1rem">View & Apply</Text>
                            </a>
                        </NextLink>
                    </Box>
                    <Box ml="1rem">
                        <Badge colorScheme={badgeColor}>{type.toUpperCase()}</Badge>
                    </Box>
                </Grid>
            </a>
        </NextLink>
    )
}
