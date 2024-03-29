import styled from "styled-components";
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
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 2;
    background-color: ${({theme}) =>theme.bgLighter};
    height: calc(100vh - 55px);
    color: ${({theme}) =>theme.text};
    font-size: 14px;
    position: sticky;
    top: 55px;
`;
const Wrapper = styled.div`
    padding: 15px 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0px;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: ${({theme}) => theme.soft};
    }
`;
const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) =>theme.soft};
`;
const Login = styled.div``;
const Button = styled.button`
    background: transparent;
    border: 2px solid blue;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({theme}) =>theme.text};
    padding: 5px 15px;
    margin-top: 10px;
    cursor: pointer;
`;

const Menu = ({darkMode, setDarkMode}) => {
    return (
        <Container>
            <Wrapper>
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
                <Link to="/sigin" style={{textDecoration: 'none', color: 'inherit'}}>
                    <Login>Sign in to like videos, comment, and subscribe.
                        <Button><AccountCircleOutlinedIcon /> Sign In</Button>
                    </Login>
                </Link>
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
                <Item onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <><LightModeIcon /> Light Mode</> : <><DarkModeOutlinedIcon /> Dark Mode</> }
                </Item>
            </Wrapper>
        </Container>
    );
}

export default Menu;