import { Box, Container, Grid, Heading, Text } from '@chakra-ui/layout'
import Hero from '../components/Hero'

export default function Contact() {
    return (
        <Container maxW="container.xl">
            <Hero kids={<HeroText />} />
            <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} mb="4rem" gap="2rem">
                <Box>
                    <Heading>Contact</Heading>
                    <Text mt="2rem">
                        We choose to go to the moon in this decade and do the other things, not because they are easy.
                        <br /><br />
                        Because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone and one.
                        <br /><br />
                        <span style={{ color: "#939393" }}>Address</span>: New York, NY, United States <br />
                        <span style={{ color: "#939393" }}>Phone</span>: +1 234-567-890 <br />
                        <span style={{ color: "#939393" }}>Hours</span>: 6:00 am – 2:00 am
                    </Text>
                </Box>
                <Box>
                    Form Coming Sooon
                </Box>
            </Grid>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.517742083455!2d90.38176359443852!3d23.72030344367396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c6186bdc6f%3A0xf8370e32aaa0761d!2sHear%20the%20Unheard!5e0!3m2!1sen!2sbd!4v1632257395895!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{border:0, marginInline: "auto"}}
                loading="lazy">
            </iframe>
        </Container>
    )
}

const HeroText = () => {
    return (
        <Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
            Let{"'"}s do some<br />
            amazing <Heading as="p" display="inline">work</Heading> together
        </Text>
    )
}