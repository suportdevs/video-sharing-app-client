import styled from "styled-components";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Container = styled.div`
    display: flex;
    gap: 8px;
    margin: 10px 0;
`;
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #999;
    cursor: pointer;
`;
const CommentWrapper = styled.div`
    color: ${({theme}) => theme.text};
`;
const UserName = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: ${({theme}) => theme.text};
    margin-right: 10px;
`;
const Date = styled.span`
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};
`;
const CommentBody = styled.p`
    font-size: 14px;
    color: ${({theme}) => theme.text};
    margin: 5px 0;
`;
const CommentButtons = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 3px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
const Comment = () => {
    return (
        <Container>
            <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
            <CommentWrapper>
                <UserName>You Tube</UserName>
                <Date>1 day ago</Date>
                <CommentBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ratione omnis a veritatis rem excepturi commodi, pariatur necessitatibus itaque natus?</CommentBody>
                <CommentButtons>
                    <Button><ThumbUpOffAltIcon /> 10</Button>
                    <Button><ThumbDownOffAltIcon /></Button>
                    <Button>Reply</Button>
                </CommentButtons>
            </CommentWrapper>
        </Container>
    )
}

export default Comment;