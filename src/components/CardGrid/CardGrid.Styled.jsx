import styled from "styled-components";

export const CardGridDiv = styled.div`
  padding-block: 20px;
  padding-inline: 20px;
`;

export const ChangeView = styled.div`
  padding-inline: 20px;
  button {
    border-radius: 7px;
    border: 1px solid rgb(188, 188, 188);
    color: rgb(188, 188, 188);
  }
`;

export const LayoutCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 16px;

  @media (max-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
  .pk {
    display: flex;
    justify-content: center;
    align-items: center;
    &-card {
      border-radius: 10px;
      border: 1px solid rgb(188, 188, 188);
      &-title {
        padding: 10px 10px;
        border-bottom: 1px solid rgb(188, 188, 188);
        display: flex;
        justify-content: space-between;
        h4 {
          display: flex;
          align-items: center;
        }
        p {
          padding: 5px 5px;
          border-radius: 50px;
          font-weight: 500;
          color: #fff;
        }
      }
      img {
        width: 240px;
        height: 330px;
      }
    }
  }
  .bottom-bar {
    border-top: 1px solid rgb(188, 188, 188);
    padding: 5px;
    button {
      width: 100%;
      border-radius: 6px;
      background-color: #1776d1;
      color: #fff;
      &:hover {
        background-color: #b1d9ff;
        color: #1776d1;
      }
    }
  }
`;
