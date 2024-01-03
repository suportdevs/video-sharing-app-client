import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import FlagIcon from '@mui/icons-material/Flag';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import YouTubeImg from "../images/youtube.png";
import { Home } from "@mui/icons-material";

const Container = styled.div`
    flex: 1;
    padding: 15px 25px;
    font-size: 14px;
    background: #0f0f0f;
    color: white;
    height: 100vh;
    position: sticky;
    top: 0;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 10px;
`
const MenuToggleIcon = styled.div``

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap:8px;
    font-size: 22px;
    font-weight: bold;
`
const Img = styled.img`
    width: 30px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0px;
    cursor: pointer;
    font-weight: 500;
`
const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid #f5f5f5;
`
const Login = styled.div``
const Button = styled.button`
    background: transparent;
    border: 1px solid blue;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: white;
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
            <Item>
                <ExploreIcon /> Explore
            </Item>
            <Item>
                <SubscriptionsIcon /> Subscriptions
            </Item>
            <Hr />
            <Item>
                <VideoLibraryIcon /> Library
            </Item>
            <Item>
                <HistoryIcon /> History
            </Item>
            <Item>
                <WhatshotIcon /> Trending
            </Item>
            <Hr />
            <Login>Sign in to like videos, comment, and subscribe.</Login>
            <Button><AccountCircleOutlinedIcon /> Sign In</Button>
            <Hr />
            <Item>
                <MusicNoteIcon /> Music
            </Item>
            <Item>
                <SportsEsportsIcon /> Gaming
            </Item>
            <Item>
                <EmojiEventsIcon /> Sports
            </Item>
            <Item>
                <MovieFilterIcon /> Movies
            </Item>
            <Item>
                <NewspaperIcon /> News
            </Item>
            <Item>
                <LiveTvIcon /> Live
            </Item>
            <Hr />
            <Item>
                <SettingsSuggestIcon /> Setting
            </Item>
            <Item>
                <FlagIcon /> Report
            </Item>
            <Item>
                <HelpOutlineIcon /> Help
            </Item>
            <Item>
                <LightModeIcon /> Light Mode
            </Item>
        </Container>
    );
}

export default Menu;