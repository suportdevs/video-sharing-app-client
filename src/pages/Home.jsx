import styled, { ThemeProvider } from "styled-components";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { darkTheme, lightTheme } from "../utilies/theme";

const Container = styled.div`
    display: flex;
`;
const Main = styled.div`
    flex: 7;
    background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <Menu darkMode={darkMode} setDarkMode={setDarkMode}></Menu>
                <Main>
                    <Navbar></Navbar>
                    <Wrapper>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    <h1>main</h1>
                    </Wrapper>
                </Main>
            </Container>
        </ThemeProvider>
        );
}

export default Home;