const { default: styled } = require("styled-components");

const ProfileCard = styled.aside`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: white;
    width: 99%;
    margin: 10px auto;
    img{
        display: block;
        height: 100%;
        width: 100%;
    }
`;
export const ProfileCardTextWrapper = styled.div`
    grid-column: 2 / 5;
    div{
        margin: 10px;
    }
`;
export const ProfileCardImageWrapper = styled.div`
    grid-column: 1 / 2;
`;

export default ProfileCard;