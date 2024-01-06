import styled from "styled-components";
import SortIcon from '@mui/icons-material/Sort';

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
    cursor: pointer;
`;

const Comments = () => {
    return (
        <Container>
            <CommentTop>
                <CommentCounter>250 Comments</CommentCounter>
                <CommentSort><SortIcon /> Sort by</CommentSort>
            </CommentTop>
        </Container>
    )
}

export default Comments;