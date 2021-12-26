import { Box, Container, Grid, Heading, Text } from '@chakra-ui/layout'
import Hero from '../components/Hero'
import { useEffect, useState } from 'react'

const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAkzFHofYmEUx5ahIDTIBgOGlLeaqF_ylI&channelId=UCvgfXK4nTYKudb0rFR6noLA&part=snippet,id&order=date&maxResults=6"


export default function Videos() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        if(!videos) {
            (videos && !videos[0]) && fetch(url).then(res => res.json()).then(data => setVideos(data.items))
        }
    }, [videos])

    return (
        <>
            <Hero kids={<HeroText />} />
            <Container centerContent maxW="container.xl">
                <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap="1rem">
                    {videos && videos[0] && videos.map((video, i) => {
                        return <Iframe id={video.id.videoId} key={i} />
                    })}
                </Grid>
            </Container>
        </>
    )
}

const Iframe = ({ id }) => {
    return (
        <Box
            as="iframe"
            width="360px"
            height="200px"
            src={`https://www.youtube.com/embed/${id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            We talk about those who<Heading as="p" display="inline"> can&apos;t.</Heading>
        </Text>
    )
}