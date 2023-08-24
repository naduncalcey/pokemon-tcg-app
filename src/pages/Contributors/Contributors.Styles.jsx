import styled from "styled-components";

export const ContributorsDiv = styled.div`
  height: calc(100vh - 137px);
  background-color: #272727;
  color: #fff;
  .github-header {
    display: flex;
    justify-content: space-between;
    padding-inline: 20px;
    background-color: #323232;
    padding-block: 10px;
    &--text {
      color: #e6e6e6;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    a {
      padding: 10px 20px;
      background-color: #101010;
      border-radius: 3px;
      color: #fff;
      text-decoration: none;
    }
  }
  .github-contributors {
    padding-inline: 20px;
    padding-block: 20px 40px;
    .github-title {
      color: #e6e6e6;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
    }
  }
  .layout {
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .github-card {
    padding: 10px;
    background-color: #171717;
    display: flex;
    gap: 20px;
    align-items: center;
    border-radius: 8px;
    width: fit-content;
    img {
      display: inline-block;
      border-radius: 6px;
    }
    .inner {
      display: flex;
      justify-content: center;
    }
  }
`;
