import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styled from 'styled-components';

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 55px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    height: 100%;
    position: relative;
`;
const Search = styled.div`
    position: absolute;
    width: 40%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;
const Input = styled.input`
    padding: 5px;
    border: none;
    background-color: transparent;
    outline: none;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
    background: transparent;
    border: 2px solid blue;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({theme}) =>theme.text};
    padding: 5px 15px;
    cursor: pointer;
`;
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search"/>
                    <SearchOutlinedIcon />
                </Search>
                <Button><AccountCircleOutlinedIcon /> Sign In</Button>
            </Wrapper>
        </Container>
    );
}

export default Navbar;