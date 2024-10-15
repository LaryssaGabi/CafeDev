import styled from "styled-components";

export const ContainerFooter = styled.footer`
    background-color: #270c03;
    min-height: 150px;
    padding: 1rem;
`;

export const ConatinerLogoFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
    a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 2rem;
        line-height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        letter-spacing: 0.05rem;
        padding: 10px 20px 5px 0;
        font-family: 'Pacifico', cursive;

        img {
            width: 3.5rem;
            border-radius: 50%;
        }

        @media screen and (max-width: 871px) {
            font-size: 1.4rem;
        }

        @media screen and (max-width: 575px) {
            font-size: 1.5rem;
        }
    }

    p{
        color: #fff;
        margin: 1rem;
    }
`;

