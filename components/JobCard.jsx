import { Badge, Box, Grid, Heading, Text } from "@chakra-ui/layout";
import NextLink from "next/link"

export default function JobCard({ job }) {
    const { position, location, type, _key } = job
    const capitalType = type.toUpperCase() 
    const badgeColor = capitalType === "FULL TIME" && "purple" ||
        capitalType === "PART TIME" && "orange" ||
        capitalType === "REMOTE" && "red" ||
        capitalType === "VOULUNTEER" && "green"
    return (
        <Grid mx="auto" my="1rem" templateColumns="1fr .1fr" w="310px" p="1rem" shadow="md" bgColor="#00001">
            <Box>
                <Heading fontSize="1.25rem">{position}</Heading>
                <Text>{location}</Text>
                <NextLink href={'/join/' + _key}>
                    <a>
                        <Text color="green.500" fontWeight="medium" mt="1rem">View & Apply</Text>
                    </a>
                </NextLink>
            </Box>
            <Box ml="1rem">
                <Badge colorScheme={badgeColor}>{capitalType.toUpperCase()}</Badge>
            </Box>
        </Grid>
    )
}
