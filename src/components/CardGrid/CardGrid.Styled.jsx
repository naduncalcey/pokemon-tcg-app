import styled from "styled-components";

export const CardGridDiv = styled.div`
  padding-block: 20px;
`;

export const ChangeView = styled.div`
  button {
    border-radius: 7px;
    border: 1px solid rgb(188, 188, 188);
    color: rgb(188, 188, 188);
  }
`;

export const LayoutCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(242px, 1fr));
  gap: 20px;
  .pk {
    &-card {
      padding: 0.5rem;
      border-radius: 10px;
      &-title {
        padding: 10px 10px;
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
      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 240px;
        height: 330px;
      }
    }
  }
  .bottom-bar {
    padding: 0.25rem 0;
    display: grid;
    place-items: center;
  }
`;
