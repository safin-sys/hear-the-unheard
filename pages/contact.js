555import { Box, Container, Grid, Heading, Text } from '@chakra-ui/layout'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import client from '../helper/sanity'
import RichText from '@sanity/block-content-to-react'

export const getStaticProps = async () => {
    const info = await client.fetch("*[_type == 'contact'][0]")
    return {
        props: {
            info
        }
    }
}

export default function Contact({ info }) {
    const { title, description, contact } = info
    const { address, hours, phone } = contact

    return (
        <Container maxW="container.xl">
            <Hero kids={<HeroText />} />
            <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} mb="4rem" gap="2rem">
                <Box>
                    <Heading mb="2rem">{title}</Heading>
                    <RichText blocks={description} />
                    <Text mt="1.5rem">
                        {
                            address &&
                            <p>
                                <span style={{ color: "#939393" }}>Address: </span>
                                {address}
                            </p>
                        }
                        {
                            phone &&
                            <p>
                                <span style={{ color: "#939393" }}>Phone: </span>
                                {phone}
                            </p>
                        }
                        {
                            hours &&
                            <p>
                                <span style={{ color: "#939393" }}>Hours: </span>
                                {hours}
                            </p>
                        }
                    </Text>
                </Box>
                <Box mt={4}>
                    <ContactForm />
                </Box>
            </Grid>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.517742083455!2d90.38176359443852!3d23.72030344367396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c6186bdc6f%3A0xf8370e32aaa0761d!2sHear%20the%20Unheard!5e0!3m2!1sen!2sbd!4v1632257395895!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0, marginInline: "auto" }}
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