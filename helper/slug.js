export default function slug(Text) {
    return Text
        .toLowerCase()
        .replace(/ /g, '_')
        .replace(/[^\w-]+/g, '')
        ;
}