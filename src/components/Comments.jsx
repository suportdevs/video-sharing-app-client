import styled from "styled-components";
import SortIcon from '@mui/icons-material/Sort';
import Comment from "./Comment";

const Container =styled.div``;
const CommentTop = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const CommentCounter = styled.h1`
    font-size: 26px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const CommentSort = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    gap:5px;
    border: none;
    color: ${({theme}) => theme.text};
    cursor: pointer;
`;
const NewCommentWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin: 10px 0 ;
`;
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #999;
    cursor: pointer;
`;
const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.text};
    outline: none;
    width: 100%;
`;

const Comments = () => {
    return (
        <Container>
            <CommentTop>
                <CommentCounter>250 Comments</CommentCounter>
                <CommentSort><SortIcon /> Sort by</CommentSort>
            </CommentTop>
            <NewCommentWrapper>
                <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
                <Input placeholder="Write a comment..."/>
            </NewCommentWrapper>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments;