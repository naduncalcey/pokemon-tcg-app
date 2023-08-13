import styled from "styled-components";
import { Dialog } from "@mui/material";

export const DialogContainer = styled(Dialog)`
  .MuiDialogContent-root {
    padding: 16px 16px;
  }
  .MuiPaper-root {
    width: fit-content;
    max-width: 650px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    border-bottom: 1px solid rgb(188, 188, 188);
    h2 {
      padding: 0;
      display: flex;
      align-items: center;
    }
  }
`;

export const CardDetailsDiv = styled.div`
  .price {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgb(188, 188, 188);
    .open-card {
      background: rgb(188, 188, 188);
      border-radius: 50px;
      padding: 5px;
      height: 34px;
      width: 34px;
      color: #ffffff;
      &:hover {
        background: rgb(114, 114, 114);
      }
    }
    &-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      h4 {
        display: flex;
        align-items: center;
      }
    }
    &-box {
      display: flex;
      justify-content: space-between;
    }
  }
  .img-div {
    img {
      display: flex;
      justify-content: center;
      width: 300px;
      height: auto;
      @media (max-width: 768px) {
        width: 250px;
        margin: 0 auto;
      }
    }
  }
  .details-div {
  }
  .detail-row {
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    background: rgb(177, 177, 177);
    background: linear-gradient(
      90deg,
      rgba(177, 177, 177, 1) 0%,
      rgba(122, 122, 122, 1) 35%,
      rgba(79, 79, 79, 1) 100%
    );
    padding: 5px 10px;
    margin-bottom: 5px;
    min-width: 300px;
    h6 {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
    }
    P {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
    }
  }
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
