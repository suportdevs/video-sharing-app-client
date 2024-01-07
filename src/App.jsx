import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utilies/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = styled.div`
    // display: flex;
`;
const Main = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
    flex: 10;
`;

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <BrowserRouter>
                <Navbar></Navbar>
                <Main>
                    <Menu darkMode={darkMode} setDarkMode={setDarkMode}></Menu>
                    <Wrapper>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home />} />
                                <Route path="/sigin" element={<SignIn />} />
                                <Route path="video">
                                    <Route path=":id" element={<Video />} />
                                </Route>
                            </Route>
                        </Routes>
                    </Wrapper>
                </Main>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
        );
}

export default App;