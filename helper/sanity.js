import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: 'h32vxuts',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false
})

export default client