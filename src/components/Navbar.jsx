import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import YouTubeImg from "../images/youtube.png";

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 55px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 100%;
    position: relative;
`;
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
`;
const MenuToggleIcon = styled.div``;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap:8px;
    font-size: 22px;
    font-weight: bold;
`;
const Img = styled.img`
    width: 30px;
`;
const Search = styled.div`
    position: absolute;
    width: 40%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
    padding: 5px;
    border: none;
    background-color: transparent;
    outline: none;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
    background: transparent;
    border: 2px solid blue;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({theme}) =>theme.text};
    padding: 5px 15px;
    cursor: pointer;
`;
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <MenuToggleIcon>
                        <MenuIcon />
                    </MenuToggleIcon>
                    <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Logo>
                            <Img src={YouTubeImg} alt="YouTube" />
                            YouTube
                        </Logo>
                    </Link>
                </LogoContainer>
                <Search>
                    <Input placeholder="Search"/>
                    <SearchOutlinedIcon />
                </Search>
                <Link to="/sigin" style={{textDecoration: 'none'}}>
                    <Button><AccountCircleOutlinedIcon /> Sign In</Button>
                </Link>
            </Wrapper>
        </Container>
    );
}

export default Navbar;