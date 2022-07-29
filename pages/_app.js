import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../src/Layout'
import theme from '../src/utils/theme'

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
