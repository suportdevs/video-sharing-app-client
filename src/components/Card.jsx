import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    width: ${(props) => (props.type !== 'sm' && '385px')};
    margin-bottom: ${(props) => props.type === 'sm' ? '10px' : '0px'};
    cursor: pointer;
    display: ${(props) => (props.type === 'sm' && 'flex')};
    gap: 10px;
`;
const Image = styled.img`
    width: 100%;
    height: ${(props) => (props.type === 'sm' ? '100px' : '200px')};
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
`;
const Details = styled.div`
    display: flex;
    gap: 10px;
    padding:  ${(props) => (props.type !== 'sm' && '15px 0')};
    flex: 1;
`;
const Texts = styled.div`

`;
const ChannelImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"};
`;
const Title = styled.h1`
    font-size: ${(props) => props.type === "sm" ? '17px' : '26px'};
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: ${(props) => props.type === "sm" ? '14px' : '20px'};
    font-weight: 500;
    color: ${({theme}) => theme.text};
    margin-top: 5px;
`;
const Info = styled.div`
    font-size: ${(props) => props.type === "sm" ? '14px' : '20px'};
    color: ${({theme}) => theme.textSoft};
`;

const Card = ({type}) => {
    return (
        <Link to="/video/test" style={{textDecoration: 'none'}} >
            <Container type={type}>
                <Image type={type} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzioaZhFurBNvjtM5Oi8GEMk-XzJvw-nFtCQ&usqp=CAU" />
                <Details type={type}>
                    <ChannelImg type={type} src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
                    <Texts>
                        <Title type={type}>How to create a youtube thumbnail</Title>
                        <ChannelName type={type}>You Tube</ChannelName>
                        <Info type={type}>149K views . 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card;