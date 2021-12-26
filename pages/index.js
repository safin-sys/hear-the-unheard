import { Heading, Text } from '@chakra-ui/layout'
import Hero from '../components/Hero'
import ImageGrid from '../components/ImageGrid'
import client from "../helper/sanity"

export const getStaticProps = async () => {
    const images = await client.fetch("*[_type == 'home'][0]['image_grid']")
    return {
        props: {
            images
        }
    }
}

export default function Home({ images }) {
	return (
		<>
			<Hero kids={<HeroText />} />
			<ImageGrid images={images} />
		</>
	)
}

const HeroText = () => {
	return (
		<Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
			We talk about those who<Heading as="p" display="inline"> can&apos;t.</Heading>
		</Text>
	)
}