import styled from "@emotion/styled";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Comments from "../components/Comments";

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
    margin: 10px 0;
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
    cursor: pointer;
`;
const ChannelTexts = styled.div``;
const ChannelName = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: ${({theme})=> theme.text};
    cursor: pointer;
`;
const ChannelSubscribers = styled.p`
    font-size: 14px;
    color: ${({theme})=> theme.textSoft};
`;
const Subscribe = styled.button`
    padding: 10px 25px;
    border: none;
    border-radius: 50px;
    background-color: #eee;
    margin-left: 15px;
    cursor: pointer;
`;
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
    display: flex;
    gap: 5px;
    align-items: center;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
`;
const Hr = styled.hr`
    border: 0.5px solid ${({theme}) => theme.soft};
    margin: 10px 0;
`;
const Description = styled.div`
    padding: 10px 0;
    font-size: 14px;
    color: ${({theme}) => theme.text};
`;
const DescriptionTopText = styled.div`
    margin-bottom: 8px;
`;
const DescriptionText = styled.p``;
const Recomended = styled.div`
    flex: 2;
`;


const Video = () => {

    return (
        <Container>
            <Content>
                <VideoContainer>
                    <iframe width="100%" height="720" src="https://www.youtube.com/embed/yIaXoop8gl4?si=Img3wJAnHIA2-S6s&amp;start=3354" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </VideoContainer>
                <VideoTitle>React Video Sharing App UI Design | Youtube UI Clone with React</VideoTitle>
                <ChannelContainer>
                    <CannelInfo>
                        <ChannelImg src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
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
                <Hr />
                <Description>
                    <DescriptionTopText>
                        89,907 views  Jun 30, 2022  React.js Real-World Projects
                    </DescriptionTopText>
                    <DescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem quas laudantium harum, iure nulla, iusto dolorum, commodi modi maxime debitis cum architecto. Aliquid magni sit nobis enim atque tempore dolorem deleniti saepe esse, omnis autem, qui aspernatur inventore fuga reiciendis facilis. Facilis expedita consequuntur minus amet aliquam dolorum vel dignissimos. Similique ipsam reprehenderit, quo vero, pariatur hic voluptas vel quidem nulla minima cumque voluptates natus facere mollitia minus! Quia atque officia sit animi, blanditiis incidunt rem reprehenderit similique quaerat nihil exercitationem mollitia aspernatur voluptatum, impedit itaque, tempore ratione. Laborum et minima voluptatibus. Perspiciatis ipsum dolores adipisci sapiente inventore quae!</DescriptionText>
                </Description>
                <Comments />
            </Content>

            <Recomended>Recomended</Recomended>
        </Container>
    );
}

export default Video;