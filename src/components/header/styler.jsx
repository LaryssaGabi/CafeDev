import styled from "styled-components";

export const Cabecalho = styled.header`
    background-image: linear-gradient(to right, #4a1e1b, #4a1e1be6);
    color: #fff;
    padding: 0 2rem;
    height: 4.8rem;
    display: grid;
    align-items: center;
`;

export const ContainerCabecalho = styled.div`
    padding: 0.2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 575px) {
        padding: 0;
    }
`;

export const ContainerLogo = styled.div`
    display: flex;
    margin: 0 10px;

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
`;

export const ContainerList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 5px;

    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        cursor: pointer;
        gap: 2rem;

        @media screen and (max-width: 871px) {
            display: none;
        }
    }

    a {
        text-decoration: none;
        color: #fff;
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1.75rem;

        &:hover {
            color: #8f8e8e;
            transition-duration: 500ms;
        }
    }
`;

export const Button = styled.button`
    background-color: #784538;
    border: none;
    border-radius: 20px;
    padding: 5px 1rem;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition-duration: 200ms;
    }

    img {
        margin-left: 5px;
    }
`;
