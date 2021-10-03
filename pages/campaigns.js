import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Image } from '@chakra-ui/image';
import { Heading, Container, Box, Grid, Flex } from '@chakra-ui/layout'

const list = [
    "https://www.unicef.org/sites/default/files/styles/hero_desktop/public/UN0310595-bluewash.jpg?itok=PLWmZduZ",
    "https://media-exp1.licdn.com/dms/image/C4D1BAQHR0U5eO_jylQ/company-background_10000/0/1631885066441?e=2159024400&v=beta&t=JHVlWv-FEfB9455LVWtqIA7X2y68yxOkxPUa2g8vfY4",
    "https://www.unicef.org/careers/sites/unicef.org.careers/files/styles/hero_mobile/public/2019-06/UN0161587.jpg?itok=Ujz3qKE5",
    "https://www.unicef.org/bangladesh/sites/unicef.org.bangladesh/files/styles/hero_mobile/public/2018-09/021%20Unicef-ICC-Mithila-March2017_0.jpg?itok=sWUYIe9u",
    "https://www.unicefusa.org/sites/default/files/styles/standard_layout_banner/public/field-images/story-banner/2018/Banner%20Photo_0.jpg?itok=MGTL0fQm",
    "https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UNI329351_0.jpg?itok=DNWoo-St",
    "https://www.unicef.org/evaluation/sites/unicef.org.evaluation/files/styles/hero_desktop/public/UNI229978.jpg?itok=YLvi6JgV",
    "https://image.isu.pub/150804133431-cc7a59a9bae6a76811a398bebe4c07f4/jpg/page_1.jpg"
]


export default function Campaigns() {
    return (
        <>
            <Slide />
            <Container maxW="container.xl" my="4rem">
                <Heading>Our Campaigns</Heading>
                <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]} mt="1rem" gap="2rem 1rem">
                    {list.map((src, i) => {
                        return <Card src={src} key={i} />
                    })}
                </Grid>
            </Container>
        </>
    )
}

const Slide = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
        >
            {list.map((src, i) => {
                return <SwiperSlide key={i}>
                    <Image src={src} objectFit="cover" w="100%" h={["50vh", "60vh", "80vh"]} />
                </SwiperSlide>
            })}
        </Swiper>
    )
}

const Card = ({ src }) => {
    return (
        <Box w={["100%", "250px"]} pos="relative" mx="auto">
            <Image src={src} w={["100%", "250px"]} h="220px" objectFit="cover" />
            <Grid bgColor="	hsl(148, 100%, 29%, 60%)" pos="absolute" zIndex="1" top="0" h="220px" w={["100%", "250px"]} placeContent="center" opacity="0" _hover={{ opacity: "1" }} transition=".2s opacity ease">
                <Heading fontSize="1rem" fontWeight="medium" color="white" textAlign="center" p="1rem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam illo id beatae est eius eum tenetur enim, similique molestias. Velit, error ea laborum at libero maiores ex ullam quaerat?
                </Heading>
            </Grid>
            <Box bgColor="#009444">
                <Heading fontSize="1rem" fontWeight="medium" color="white" textAlign="center" p="1rem">
                    Improving Well Being of Ethnic Women and Girls in Chattogram Hill Tracks.
                </Heading>
            </Box>
        </Box>
    )
}