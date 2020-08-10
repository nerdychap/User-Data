import fadeIn from "./Animations";
const { default: styled } = require("styled-components");

const UserStyle = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px 15px;
    max-width: 1000px;
    margin: auto;
    padding: 1%;
    margin-bottom: 2%;

    @media screen and (min-width: 340px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 600px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1200px){
        grid-template-columns: repeat(5, 1fr);
    }
    
`;

export const ItemWrapper = styled.div`
    animation: ${fadeIn} .5s;
    height: 100%;
    transition: box-shadow .3s;
    background-color: white;
    &:hover{
        box-shadow: grey 0px 0px 15px;
    }
    a{
        text-decoration: none;
    }
`;


export default UserStyle;
