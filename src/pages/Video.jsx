import styled from "@emotion/styled";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Container =styled.div`
    display: flex;
    padding: 30px;
`;
const Content = styled.div`
    flex: 5;
`;
const VideoContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
`;
const VideoTitle = styled.h1`
    font-size: 26px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const ChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CannelInfo =styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const ChannelImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #999;
`;
const ChannelTexts = styled.div``;
const ChannelName = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: ${({theme})=> theme.text};
`;
const ChannelSubscribers = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme})=> theme.textSoft};
`;
const Subscribe = styled.button`
    padding: 10px 25px;
    border: none;
    border-radius: 50px;
    background-color: #eee;
    margin-left: 15px;
`;
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
const Recomended = styled.div`
    flex: 2;
`;


const Video = () => {
    return (
        <Container>
            <Content>
                <VideoContainer>
                <iframe
                    width="100%"
                    height="720"
                    src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                </VideoContainer>
                <VideoTitle>React Video Sharing App UI Design | Youtube UI Clone with React</VideoTitle>
                <ChannelContainer>
                    <CannelInfo>
                        <ChannelImg />
                        <ChannelTexts>
                            <ChannelName>You Tube</ChannelName>
                            <ChannelSubscribers>1.5M Subscribers</ChannelSubscribers>
                        </ChannelTexts>
                        <Subscribe>Subscribe</Subscribe>
                    </CannelInfo>
                    <Buttons>
                        <Button><ThumbUpOffAltIcon /> 20K</Button>
                        <Button><ThumbDownOffAltIcon /> 20K</Button>
                        <Button><ReplyOutlinedIcon /> Share</Button>
                        <Button><FileDownloadOutlinedIcon /> Download</Button>
                        <Button><PlaylistAddOutlinedIcon /> Save</Button>
                    </Buttons>
                </ChannelContainer>
            </Content>
            <Recomended>Recomended</Recomended>
        </Container>
    );
}

export default Video;