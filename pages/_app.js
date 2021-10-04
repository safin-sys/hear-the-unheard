import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hear The Unheard</title>
				<link rel="icon" href="/favicon.svg" />
				{/* Primary Meta Tags */}
				<title>Hear the Unheard</title>
				<meta name="title" content="Hear the Unheard" />
				<meta name="description" content="Hear the Unheard is a non-profit organization which talks for the people who can not. So let's Hear what was Unheard!" />
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://hear-the-unheard.vercel.app" />
				<meta property="og:title" content="Hear the Unheard" />
				<meta property="og:description" content="Hear the Unheard is a non-profit organization which talks for the people who can not. So let's Hear what was Unheard!" />
				<meta property="og:image" content="/logo.jpg" />
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://hear-the-unheard.vercel.app" />
				<meta property="twitter:title" content="Hear the Unheard" />
				<meta property="twitter:description" content="Hear the Unheard is a non-profit organization which talks for the people who can not. So let's Hear what was Unheard!" />
				<meta property="twitter:image" content="/logo.jpg" />
				{/* Others */}
				<meta name="keywords" content="disability, communication disorders" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
			</Head>
			<ChakraProvider>
				<Nav />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	)
}

export default MyApp
