import styled from "styled-components";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const Container = styled.div`
    display: flex;
`;
const Main = styled.div`
    flex: 7;
`;

const Home = () => {
    return (
        <Container>
            <Menu></Menu>
            <Main>
                <Navbar></Navbar>
                <h1>main</h1>
            </Main>
        </Container>
        );
}

export default Home;