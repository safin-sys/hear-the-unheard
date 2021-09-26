import { motion } from "framer-motion";

const pathVariant = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

export default function Ladder() {
    return (
        <motion.svg initial="hidden" animate="visible" width="40" height="156" viewBox="0 0 40 156" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={pathVariant} d="M34.5 54.1875C34.5 54.3542 34.4583 54.5 34.375 54.625C34.2917 54.75 34.1458 54.8542 33.9375 54.9375C33.7292 55 33.4479 55.0521 33.0938 55.0938C32.7604 55.1562 32.3438 55.1875 31.8438 55.1875C31.3021 55.1875 30.8646 55.1562 30.5312 55.0938C30.1979 55.0521 29.9271 55 29.7188 54.9375C29.5104 54.8542 29.3646 54.75 29.2812 54.625C29.1979 54.5 29.1562 54.3542 29.1562 54.1875V36.25H10.75V54.1875C10.75 54.3542 10.7083 54.5 10.625 54.625C10.5417 54.75 10.3958 54.8542 10.1875 54.9375C9.97917 55 9.69792 55.0521 9.34375 55.0938C9.01042 55.1562 8.58333 55.1875 8.0625 55.1875C7.5625 55.1875 7.13542 55.1562 6.78125 55.0938C6.42708 55.0521 6.14583 55 5.9375 54.9375C5.72917 54.8542 5.58333 54.75 5.5 54.625C5.41667 54.5 5.375 54.3542 5.375 54.1875V15.375C5.375 15.2083 5.41667 15.0625 5.5 14.9375C5.58333 14.8125 5.72917 14.7188 5.9375 14.6562C6.14583 14.5729 6.42708 14.5104 6.78125 14.4688C7.13542 14.4062 7.5625 14.375 8.0625 14.375C8.58333 14.375 9.01042 14.4062 9.34375 14.4688C9.69792 14.5104 9.97917 14.5729 10.1875 14.6562C10.3958 14.7188 10.5417 14.8125 10.625 14.9375C10.7083 15.0625 10.75 15.2083 10.75 15.375V31.5625H29.1562V15.375C29.1562 15.2083 29.1979 15.0625 29.2812 14.9375C29.3646 14.8125 29.5104 14.7188 29.7188 14.6562C29.9271 14.5729 30.1979 14.5104 30.5312 14.4688C30.8646 14.4062 31.3021 14.375 31.8438 14.375C32.3438 14.375 32.7604 14.4062 33.0938 14.4688C33.4479 14.5104 33.7292 14.5729 33.9375 14.6562C34.1458 14.7188 34.2917 14.8125 34.375 14.9375C34.4583 15.0625 34.5 15.2083 34.5 15.375V54.1875Z" fill="#006838" />
            <motion.path variants={pathVariant} d="M34.5 93.1875C34.5 93.3542 34.4583 93.5 34.375 93.625C34.2917 93.75 34.1458 93.8542 33.9375 93.9375C33.7292 94 33.4479 94.0521 33.0938 94.0938C32.7604 94.1562 32.3438 94.1875 31.8438 94.1875C31.3021 94.1875 30.8646 94.1562 30.5312 94.0938C30.1979 94.0521 29.9271 94 29.7188 93.9375C29.5104 93.8542 29.3646 93.75 29.2812 93.625C29.1979 93.5 29.1562 93.3542 29.1562 93.1875V75.25H10.75V93.1875C10.75 93.3542 10.7083 93.5 10.625 93.625C10.5417 93.75 10.3958 93.8542 10.1875 93.9375C9.97917 94 9.69792 94.0521 9.34375 94.0938C9.01042 94.1562 8.58333 94.1875 8.0625 94.1875C7.5625 94.1875 7.13542 94.1562 6.78125 94.0938C6.42708 94.0521 6.14583 94 5.9375 93.9375C5.72917 93.8542 5.58333 93.75 5.5 93.625C5.41667 93.5 5.375 93.3542 5.375 93.1875V54.375C5.375 54.2083 5.41667 54.0625 5.5 53.9375C5.58333 53.8125 5.72917 53.7188 5.9375 53.6562C6.14583 53.5729 6.42708 53.5104 6.78125 53.4688C7.13542 53.4062 7.5625 53.375 8.0625 53.375C8.58333 53.375 9.01042 53.4062 9.34375 53.4688C9.69792 53.5104 9.97917 53.5729 10.1875 53.6562C10.3958 53.7188 10.5417 53.8125 10.625 53.9375C10.7083 54.0625 10.75 54.2083 10.75 54.375V70.5625H29.1562V54.375C29.1562 54.2083 29.1979 54.0625 29.2812 53.9375C29.3646 53.8125 29.5104 53.7188 29.7188 53.6562C29.9271 53.5729 30.1979 53.5104 30.5312 53.4688C30.8646 53.4062 31.3021 53.375 31.8438 53.375C32.3438 53.375 32.7604 53.4062 33.0938 53.4688C33.4479 53.5104 33.7292 53.5729 33.9375 53.6562C34.1458 53.7188 34.2917 53.8125 34.375 53.9375C34.4583 54.0625 34.5 54.2083 34.5 54.375V93.1875Z" fill="#009444" />
            <motion.path variants={pathVariant} d="M34.5 132.188C34.5 132.354 34.4583 132.5 34.375 132.625C34.2917 132.75 34.1458 132.854 33.9375 132.938C33.7292 133 33.4479 133.052 33.0938 133.094C32.7604 133.156 32.3438 133.188 31.8438 133.188C31.3021 133.188 30.8646 133.156 30.5312 133.094C30.1979 133.052 29.9271 133 29.7188 132.938C29.5104 132.854 29.3646 132.75 29.2812 132.625C29.1979 132.5 29.1562 132.354 29.1562 132.188V114.25H10.75V132.188C10.75 132.354 10.7083 132.5 10.625 132.625C10.5417 132.75 10.3958 132.854 10.1875 132.938C9.97917 133 9.69792 133.052 9.34375 133.094C9.01042 133.156 8.58333 133.188 8.0625 133.188C7.5625 133.188 7.13542 133.156 6.78125 133.094C6.42708 133.052 6.14583 133 5.9375 132.938C5.72917 132.854 5.58333 132.75 5.5 132.625C5.41667 132.5 5.375 132.354 5.375 132.188V93.375C5.375 93.2083 5.41667 93.0625 5.5 92.9375C5.58333 92.8125 5.72917 92.7188 5.9375 92.6562C6.14583 92.5729 6.42708 92.5104 6.78125 92.4688C7.13542 92.4062 7.5625 92.375 8.0625 92.375C8.58333 92.375 9.01042 92.4062 9.34375 92.4688C9.69792 92.5104 9.97917 92.5729 10.1875 92.6562C10.3958 92.7188 10.5417 92.8125 10.625 92.9375C10.7083 93.0625 10.75 93.2083 10.75 93.375V109.562H29.1562V93.375C29.1562 93.2083 29.1979 93.0625 29.2812 92.9375C29.3646 92.8125 29.5104 92.7188 29.7188 92.6562C29.9271 92.5729 30.1979 92.5104 30.5312 92.4688C30.8646 92.4062 31.3021 92.375 31.8438 92.375C32.3438 92.375 32.7604 92.4062 33.0938 92.4688C33.4479 92.5104 33.7292 92.5729 33.9375 92.6562C34.1458 92.7188 34.2917 92.8125 34.375 92.9375C34.4583 93.0625 34.5 93.2083 34.5 93.375V132.188Z" fill="#39B54A" />
        </motion.svg>
    )
}
