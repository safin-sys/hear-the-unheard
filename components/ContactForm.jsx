import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, Form, Formik } from "formik";

export default function ContactForm() {
    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {props => (
                <Form>
                    <Field name="name">
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel id="name" htmlFor="name">Your Name</FormLabel>
                                <Input {...field} id="name" placeholder="Your Name" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="email">
                        {({ field, form }) => (
                            <FormControl mt={4} isInvalid={form.errors.email && form.touched.email}>
                                <FormLabel id="email" htmlFor="email">Email Address</FormLabel>
                                <Input {...field} id="email" placeholder="Email Address" />
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="subject">
                        {({ field, form }) => (
                            <FormControl mt={4} isInvalid={form.errors.subject && form.touched.subject}>
                                <FormLabel id="subject" htmlFor="subject">Subject</FormLabel>
                                <Input {...field} id="subject" placeholder="Subject" />
                                <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="message">
                        {({ field, form }) => (
                            <FormControl mt={4} isInvalid={form.errors.message && form.touched.message}>
                                <FormLabel id="message" htmlFor="message">Message</FormLabel>
                                <Input {...field} as="textarea" id="message" placeholder="Message..." py="1rem" h="200px" />
                                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        variant="outline"
                        type="submit"
                        w="100%"
                    >
                        Send
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
