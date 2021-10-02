import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Image } from '@chakra-ui/image';

const list = [
    "https://www.unicef.org/bangladesh/sites/unicef.org.bangladesh/files/styles/hero_mobile/public/2018-09/021%20Unicef-ICC-Mithila-March2017_0.jpg?itok=sWUYIe9u",
    "https://www.unicefusa.org/sites/default/files/styles/standard_layout_banner/public/field-images/story-banner/2018/Banner%20Photo_0.jpg?itok=MGTL0fQm",
    "https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UNI329351_0.jpg?itok=DNWoo-St",
    "https://www.unicef.org/evaluation/sites/unicef.org.evaluation/files/styles/hero_desktop/public/UNI229978.jpg?itok=YLvi6JgV",
    "https://image.isu.pub/150804133431-cc7a59a9bae6a76811a398bebe4c07f4/jpg/page_1.jpg"
]


export default function Campaigns() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                {list.map((src, i) => {
                    return <SwiperSlide key={i}>
                        <Image src={src} objectFit="cover" w="100%" h="80vh" />
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    )
}
