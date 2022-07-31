import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <>
            <Container maxW="container.xl">
                <Nav />
                {children}
            </Container>
            <Footer />
        </>
    );
};

export default Layout;
