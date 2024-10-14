import styled from "styled-components";

export const Section = styled.section`
    padding: 2.5rem 3rem;
    margin: 0 auto;
    min-height: 600px;
`;

export const ContainerSection = styled.div`
    text-align: center;
    margin: 0 auto 5rem;
    padding: 0 3rem;

    h1 {
        font-size: 2.25rem;
        font-weight: bold;
        font-family: 'Pacifico', cursive;
        color: #2d3748;
    }
`;

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.25rem;
    place-items: center;
`;

export const ContainerText = styled.div`
    padding: 1rem;
    text-align: center;

    h1 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-align: center;
    }

    p {
        color: #6b7280;
        transition: color 0.7s ease-in-out;
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-align: center;
        margin-bottom: 1rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; 
    }
`;

export const CardImg = styled.div`
    height: 122px;

    img {
        max-width: 200px;
        display: block;
        margin: 0 auto;
        transform: translateY(-3.5rem);
        transition: transform 0.3s ease-in-out, scale 0.3s ease-in-out;
    }
`;

export const ContainerServiceCard = styled.div`
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease;
    max-width: 300px;
    position: relative;

    &:hover {
        background-color: #854d3d;
        color: #fff;
    }

    &:hover ${CardImg} img {
        transform: translateY(-3.5rem) scale(1.05) rotate(6deg);
    }

    &:hover ${ContainerText} p {
        color: #fff;
    }
`;
