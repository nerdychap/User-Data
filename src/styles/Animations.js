import { keyframes } from "styled-components";



const fadeIn = keyframes`
        from{
            opacity: 0;

        }
        to{
            opacity: 1;
        }
`;

export const rotate = keyframes`
    from { 
        transform: rotateZ(0deg);
    }
    to{
        transform: rotateZ(360deg);
    }
`;
export default fadeIn;