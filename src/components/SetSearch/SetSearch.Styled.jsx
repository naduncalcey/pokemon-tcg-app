import styled from "styled-components";


export const SetSearchLayout = styled.div`
    padding: 26px 16px 0 16px;
    h5 {
        font-size: 16px;
        font-weight: 500;
    }
    .set-search-container {
        padding-bottom: 16px;
    }
`;

export const SetDetailsCardHolder = styled.div`
    padding-bottom: 20px;
`;

export const SetDetailsCard = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    position: relative;
    @media (max-width: 1366px) {
        grid-template-columns: 1fr;
    }
    .logo-img-div {
        display: flex;
        justify-content: center;
    }
    .logo-img {
        padding:20px;
        width: auto;
        height: 120px;
        max-width: 380px;
    }
    .symbol-img {
        width: auto;
        height: 32px;
        position: absolute;
        bottom: 10px;
        right: 10px;
        padding: 5px;
        border: 1px solid rgb(188, 188, 188);
        border-radius: 3px;
        @media (max-width: 1366px) {
            top: 10px;
            right: 10px;
        }
    }
    .details-holder {
        display: flex;
        align-items: center;
    }
    .details-grid {
        display: flex;
        gap: 20px;
        padding: 20px;
        p {
            border: 1px solid rgb(188, 188, 188);
            border-radius: 7px;
            padding: 16px;
        }
    }
`;