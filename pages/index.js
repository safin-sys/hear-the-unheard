import { Heading, Text } from '@chakra-ui/layout'
import Hero from '../components/Hero'
import ImageGrid from '../components/ImageGrid'

export default function Home() {
	return (
		<>
			<Hero kids={<HeroText />} />
			<ImageGrid />
		</>
	)
}

const HeroText = () => {
	return (
		<Text as="h1" fontSize="2rem" textAlign="center" mb="80px">
			We are digital crafters from New York. <br />
			Our passion is <Heading as="p" display="inline">UI & UX</Heading> design & coding.
		</Text>
	)
}