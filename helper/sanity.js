import sanityClient from '@sanity/client'
import imageBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'h32vxuts',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false
})

export default client
const builder = imageBuilder(client)
export const urlFor = (src) => builder.image(src)