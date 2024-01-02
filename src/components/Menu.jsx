import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeImg from "../images/youtube.png";
import { Home } from "@mui/icons-material";

const Container = styled.div`
    flex: 1;
    padding: 15px 25px;
    font-size: 14px;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const MenuToggleIcon = styled.div``

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap:8px;
    font-weight: blod;
`
const Img = styled.img`
    width: 30px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 0px;
`

const Menu = () => {
    return (
        <Container>
            <LogoContainer>
                <MenuToggleIcon>
                    <MenuIcon />
                </MenuToggleIcon>
                <Logo>
                    <Img src={YouTubeImg} alt="YouTube" />
                     YouTube
                </Logo>
            </LogoContainer>
            <Item>
                <Home /> Home
            </Item>
        </Container>
    );
}

export default Menu;