import styled from 'styled-components';
/* import 'module-alias/register'; */

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #090909;
    text-align: center;
    span {
        color: #fff;
        font-size: 19px;
    }

    .text-dev {
        span {
            color: #00f78c;
        }
        
    }

    .btn-contact {
        button {
            color: #fff;
            background-color: #00f78c;
            
        }

    transition: all 0.5s ease-in-out;
        }
`;
