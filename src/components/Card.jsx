import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    width: 400px;
    margin-bottom: 45px;
    cursor: pointer;
`;
const Image = styled.img`
    width: 100%;
    height: 200px;
`;
const Details = styled.div`
    display: flex;
    gap: 10px;
    padding: 15px 0;
`;
const Texts = styled.div`

`;
const ChannelImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #999;
`;
const Title = styled.h1`
    font-size: 26px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
    margin-top: 5px;
`;
const Info = styled.div`
    font-size: 20px;
    color: ${({theme}) => theme.softText};
`;

const Card = () => {
    return (
        <Link to="/video/test" style={{textDecoration: 'none'}} >
            <Container>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzioaZhFurBNvjtM5Oi8GEMk-XzJvw-nFtCQ&usqp=CAU" />
                <Details>
                    <ChannelImg src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
                    <Texts>
                        <Title>How to create a youtube thumbnail</Title>
                        <ChannelName>You Tube</ChannelName>
                        <Info>149K views . 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card;