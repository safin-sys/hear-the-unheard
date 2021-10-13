import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

export default function ContactForm() {
    return (
        <form
            action="https://formspree.io/f/mgerqgpb"
            method="POST"
        >
            <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input name="_name" placeholder="Your Name" />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Email Address</FormLabel>
                <Input name="_replyto" placeholder="Email Address" />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Subject</FormLabel>
                <Input name="_subject" placeholder="Subject" />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Message</FormLabel>
                <Input name="_message" as="textarea" placeholder="Message..." py="1rem" h="200px" />
            </FormControl>
            <Button
                mt={4}
                colorScheme="teal"
                variant="outline"
                type="submit"
                w="100%"
            >
                Send
            </Button>
        </form>
    )
}
