import styled from "styled-components";

export const ContainerPrincipal = styled.main`
    min-height: 600px;
    padding: 0 50px;
    background-color: #270c03;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    @media screen and (max-width: 960px) {
        min-height: 550px;
    }
`;

export const ContainerHome = styled.div`
    margin: 0 auto;
    padding: 3rem;

    @media screen and (max-width: 600px) {
        padding: 50px 0;
    }
`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ContainerTextHome = styled.div`
    text-align: start;

    h1 {
        font-size: 4rem;
        font-weight: bold;
    }

    span {
        font-family: 'Pacifico', cursive;
        color: #854d3d;
    }

    @media screen and (max-width: 1137px) {
        h1 {
            font-size: 3.4rem;
        }
    }

    @media screen and (max-width: 1069px) {
        h1 {
            font-size: 3.2rem;
        }
    }

    @media screen and (max-width: 1035px) {
        h1 {
            font-size: 3.1rem;
        }
    }

    @media screen and (max-width: 960px) {
        text-align: center;

        h1 {
            font-size: 3.6rem;
        }
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 460px) {
        h1 {
            font-size: 2.2rem;
        }
    }
`;

export const ContainerButton = styled.div`
    button {
        background: linear-gradient(to right, #854d3d, #4a1e1b);
        border: 2px solid #854d3d;
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        color: #fff;
        text-align: center;
        display: inline-block;
        transition: transform 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const ContainerImg = styled.div`
    img {
        width: 550px;
        transform: scale(1.25);
        animation: balanco 5s linear infinite;
    }

    @keyframes balanco {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(15deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    @media screen and (max-width: 1035px) {
        img {
            width: 450px;
        }
    }

    @media screen and (max-width: 960px) {
        img {
            width: 400px;
        }
    }

    @media screen and (max-width: 600px) {
        img {
            width: 400px;
        }
    }

    @media screen and (max-width: 460px) {
        img {
            width: 250px;
        }
    }
`;
