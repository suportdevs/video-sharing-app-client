import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 55px);
    color: ${({theme}) => theme.text};
`;
const Wrapper =styled.div`
    background-color: ${({theme}) => theme.bgLighter};
    padding: 20px 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Title = styled.h1`
    font-size: 25px;
`;
const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 300;
`;
const Input = styled.input`
    padding: 5px;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.soft};
    color: ${({theme}) => theme.text};
    width: 100%;
    outline: none;
`;
const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
`;
const Bottom =styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
`;
const Language = styled.span``;
const Links = styled.div`
    margin-left: 30px;
    cursor: pointer;
`;
const Link = styled.span`
    margin-left: 30px;
    cursor: pointer;
`;


const SignIn = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle>to continue to YouTube</SubTitle>
                <Input type="text" placeholder="User Name" />
                <Input type="password" placeholder="Password" />
                <Button>Sign In</Button>
                <Title>Or</Title>
                <Input type="text" placeholder="User Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button>Sign Up</Button>
            </Wrapper>
            <Bottom>
                <Language>English(US)</Language>
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </Bottom>
        </Container>
    )
}

export default SignIn;