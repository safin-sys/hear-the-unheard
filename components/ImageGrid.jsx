import { Box, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const list = []

for (var i = 1; i <= 9; i++) {
    list.push(i)
}

export default function ImageGrid() {
    return (
        <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} my="5rem">
            {list.map((l, i) => {
                return <Img src={`/images/${l}.jfif`} alt={l} key={i} />
            })}
        </Grid>
    )
}

const Img = ({ src, alt }) => {
    return (
        <Image w="100%" src={src} alt={alt} />
    )
}