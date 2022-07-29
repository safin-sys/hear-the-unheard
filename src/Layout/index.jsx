import { Container } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <Container maxW="container.xl">
            <Nav />
            {children}
        </Container>
    );
};

export default Layout;
